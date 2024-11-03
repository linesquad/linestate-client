import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/Layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/:id" element={<SinglePage />} />
      </Route>
    </Routes>
  );
}

export default App;
