import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import LandingPage from "../Landing/LandingPage";
import Navbar from "./Navbar";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import StudentDashboard from "../Pages/Dashboard/Student/StudentDashboard";
import TeacherDashboard from "../Pages/Dashboard/Teacher/TeacherDashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import CreateDashboard from "../Pages/Dashboard/Teacher/CreateDashboard";
import Footer from "./Footer";

export default function Header() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
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
      children: [
        { path: "dashboard", element: <TeacherDashboard /> },
        { path: "create", element: <CreateDashboard /> },
      ],
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
