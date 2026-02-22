import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

export default function Header() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/SignIn", element: <SignIn /> },
        { path: "/SignUp", element: <SignUp /> },
      ],
    },
  ]);
  function Layout() {
    return (
      <>
        <>
          <Navbar />
        </>
        <main className="pt-20">
          <Outlet />
        </main>
      </>
    );
  }
  return <RouterProvider router={route}></RouterProvider>;
}
