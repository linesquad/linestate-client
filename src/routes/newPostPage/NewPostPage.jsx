import { useRef, useState } from "react";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiReq from "../../lib/apiReq";
import { useNavigate } from "react-router-dom";

const NewPostPage = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const quillRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    console.log(inputs);
    try {
      setLoading(true);
      const response = await apiReq.post("posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          type: inputs.type,
          propertyType: inputs.propertyType,
          city: inputs.city,
          bedrooms: parseInt(inputs.bedrooms),
          bathrooms: parseInt(inputs.bathrooms),
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          description: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      console.log("Post created:", response.data);
      navigate("/" + response.data._id);
    } catch (error) {
      console.error("Error creating post:", error);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-40">
      <div className="">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <h1 className="text-xl font-bold">Create New Post</h1>
          <h2 className="text-lg font-semibold">Post Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <p>description</p>
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="number"
              name="bedrooms"
              placeholder="Bedrooms"
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="number"
              name="bathrooms"
              placeholder="Bathrooms"
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              className="border border-gray-300 p-2 w-full"
            />
            <select name="type" className="border border-gray-300 p-2 w-full">
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <select
              name="propertyType"
              className="border border-gray-300 p-2 w-full"
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
            <input
              type="text"
              name="utilities"
              placeholder="Utilities"
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="text"
              name="pet"
              placeholder="Pet Policy"
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="income"
              placeholder="Income Requirement"
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="number"
              name="size"
              placeholder="Size (sq ft)"
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="number"
              name="school"
              placeholder="School Rating"
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="number"
              name="bus"
              placeholder="Bus Stop Distance"
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="number"
              name="restaurant"
              placeholder="Restaurant Distance"
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-[#fece51] border-none cursor-pointer"
            disabled={loading}
          >
            {loading ? "Loading..." : "Create Post"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      <div className="mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="post"
            className="w-60 h-32 object-cover mb-5 rounded-md shadow-2xl"
          />
        ))}
        <UploadWidget
          uwConfig={{
            cloudName: "ddlvpobpv",
            uploadPreset: "linestate",
            multiple: true,
            maxImageFileSize: 2000000,
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
};

export default NewPostPage;
