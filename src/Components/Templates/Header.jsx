import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
export default function Header() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
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
