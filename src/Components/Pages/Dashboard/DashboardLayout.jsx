import { Outlet, NavLink, useNavigate } from "react-router";
import { useUser } from "../../../Context/UserAuthetication";
// استعمال نفس الـ Icons ديالك
import {
  FaBookOpen,
  FaChartLine,
  FaAward,
  FaPlusCircle,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaThLarge,
} from "react-icons/fa";

export default function DashboardLayout() {
  const { user, signOut } = useUser();
  const role = user?.user_metadata?.role || "student";
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#f4f7fe]">
      {" "}
      {/* لون خلفية هادئ */}
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-8 mb-4">
          <h2 className="text-2xl font-black text-blue-600 tracking-tight">
            LearnHub
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {/* Dashboard Link */}
          <NavLink
            to={`/${role}/dashboard`}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-400 hover:bg-gray-50"}`
            }
          >
            <FaThLarge /> <span className="font-medium">Dashboard</span>
          </NavLink>

          {role === "student" && (
            <>
              <NavLink
                to="/student/Mycourses"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-400 hover:bg-gray-50"}`
                }
              >
                <FaBookOpen /> <span className="font-medium">My Courses</span>
              </NavLink>
              <NavLink
                to="/student/courses"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-400 hover:bg-gray-50"}`
                }
              >
                <FaSearch /> <span className="font-medium">Browse</span>
              </NavLink>
              <NavLink
                to="/student/certificates"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-400 hover:bg-gray-50"}`
                }
              >
                <FaAward /> <span className="font-medium">Certificates</span>
              </NavLink>
            </>
          )}

          {role === "teacher" && (
            <>
              <NavLink
                to="/teacher/courses"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-400 hover:bg-gray-50"}`
                }
              >
                <FaBookOpen /> <span className="font-medium">My Courses</span>
              </NavLink>
              <NavLink
                to="/teacher/create"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-400 hover:bg-gray-50"}`
                }
              >
                <FaPlusCircle />{" "}
                <span className="font-medium">Create Course</span>
              </NavLink>
            </>
          )}
        </nav>

        <div className="p-4 border-t border-gray-50">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl transition-all"
          >
            <FaSignOutAlt /> <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white/80 backdrop-blur-md px-8 py-4 flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
          <div className="text-gray-500 font-medium">Pages / Dashboard</div>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center bg-[#f4f7fe] rounded-full px-4 py-2">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:ring-0 text-sm w-40"
              />
            </div>
            <FaBell className="text-gray-400 cursor-pointer" />
            <div className="flex items-center gap-3 border-l pl-5">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-800 leading-tight">
                  {user?.user_metadata?.firstName}
                </p>
                <p className="text-xs text-gray-400 capitalize">{role}</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                {user?.user_metadata?.firstName?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
