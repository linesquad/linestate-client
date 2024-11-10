import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import { Layout, RequireAuth } from "./routes/Layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import ProfileUpdate from "./routes/profileUpdate/ProfileUpdate";
import NewPostPage from "./routes/newPostPage/NewPostPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/profile", element: <ProfilePage /> },
        { path: "/profile/update", element: <ProfileUpdate /> },
        { path: "/add", element: <NewPostPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
