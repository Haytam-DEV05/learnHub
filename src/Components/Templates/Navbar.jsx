import { FaBookOpen } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import Theme from "./Theme";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-(--background)/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* LOGO */}

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <FaBookOpen
            className="text-(--primary) group-hover:rotate-12 transition"
            size={26}
          />

          <h1 className="text-xl font-bold text-(--text)">LearnHub</h1>
        </div>

        {/* LINKS */}

        <ul className="hidden md:flex items-center gap-8 text-(--text-light) font-medium">
          <li>
            <NavLink to="/" className="hover:text-(--primary) transition">
              Home
            </NavLink>
          </li>

          <li>
            <a className="hover:text-(--primary) transition" href="#courses">
              Courses
            </a>
          </li>

          <li>
            <a className="hover:text-(--primary) transition" href="#about">
              About
            </a>
          </li>
        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">
          <Theme />

          <NavLink
            to="/SignIn"
            className="px-5 py-2 rounded-full text-white font-medium bg-(--primary) hover:bg-(--primary-dark) hover:scale-105 transition shadow-md"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
