import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import supabase from "../../../util/supabase";

export default function DashboardLayout() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
        navigate("/SignIn");
      } else {
        console.log(data);
        setUser(data.user);
        setRole(data.user.user_metadata?.role);
      }
    };

    getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-600 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">LearnHub</h2>

        <nav className="space-y-4">
          <NavLink to={`/${role}/dashboard`} className="block hover:opacity-80">
            Dashboard
          </NavLink>

          {role === "student" && (
            <>
              <NavLink to="/student/courses" className="block hover:opacity-80">
                My Courses
              </NavLink>

              <NavLink
                to="/student/certificates"
                className="block hover:opacity-80"
              >
                Certificates
              </NavLink>
            </>
          )}

          {role === "teacher" && (
            <>
              <NavLink to="/teacher/courses" className="block hover:opacity-80">
                My Courses
              </NavLink>

              <NavLink to="/teacher/create" className="block hover:opacity-80">
                Create Course
              </NavLink>
            </>
          )}

          <button
            onClick={handleLogout}
            className="mt-6 text-sm bg-white text-blue-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* MAIN SECTION */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg capitalize">{role} Dashboard</h1>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {user?.user_metadata?.firstName}
            </span>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              {user?.user_metadata?.firstName?.charAt(0)}
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
