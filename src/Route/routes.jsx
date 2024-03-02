import AddMenu from "../pages/AddMenu";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <MenuDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "add-menu",
    element: (
      <ProtectedRoute>
        <AddMenu />
      </ProtectedRoute>
    ),
  },
];
