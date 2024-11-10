import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const UploadWidgetContext = createContext();

function UploadWidget({ uwConfig, setAvatar }) {
  // Removed setAvatar as it was unused
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    const uwScript = document.getElementById("uw");
    if (!uwScript) {
      // If not loaded, create and load the script
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    } else {
      // If already loaded, update the state
      setLoaded(true);
    }
  }, []); // Changed dependency array to empty to prevent re-running on 'loaded' state change

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setAvatar(result.info.secure_url);
          }
        }
      );

      myWidget.open(); // Directly open the widget without adding an event listener
    }
  };

  return (
    <UploadWidgetContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </UploadWidgetContext.Provider>
  );
}

export default UploadWidget;
export { UploadWidgetContext };
