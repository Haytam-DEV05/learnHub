import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import StudentDashboard from "../Pages/Dashboard/Student/StudentDashboard";
import TeacherDashboard from "../Pages/Dashboard/Teacher/TeacherDashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Footer from "./Footer";

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
    {
      path: "/student/",
      element: <DashboardLayout />,
      children: [{ path: "dashboard", element: <StudentDashboard /> }],
    },
    {
      path: "/teacher/",
      element: <DashboardLayout />,
      children: [{ path: "dashboard", element: <TeacherDashboard /> }],
    },
  ]);
  function Layout() {
    return (
      <>
        <>
          <Navbar />
        </>
        <main className="pt-20 duration-500 transition-colors">
          <Outlet />
        </main>
        <>
          <Footer />
        </>
      </>
    );
  }
  return <RouterProvider router={route}></RouterProvider>;
}
