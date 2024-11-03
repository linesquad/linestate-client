import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./ui/Wrapper";

function App() {
  return (
    <Layout>
      <Navbar />
      <HomePage />
    </Layout>
  );
}

export default App;
