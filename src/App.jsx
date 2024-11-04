import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/Layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
