import { FaBookOpen } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const handleBtnNavigate = (e) => {
    e.preventDefault();
    navigate("/SignIn");
  };
  return (
    <nav className="flex justify-around items-center min-h-20 bg-(--background) z-99 shadow-md fixed top-0 left-0 right-0 backdrop-blur-lg w-full">
      <div className="logo flex items-center cursor-pointer">
        <span className="text-(--primary)">
          <FaBookOpen size={25} className="mr-2" />
        </span>
        <h3 className="text-[20px] font-semibold">LearnHub</h3>
      </div>
      <ul className="flex space-x-3.5">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
      </ul>
      <div className="flex space-x-4.5">
        <div className="">Dark / light mode</div>
        <NavLink
          onClick={handleBtnNavigate}
          className="bg-(--accent) py-1 px-5 cursor-pointer rounded-[20px] text-white hover:-translate-y-1.5 duration-200 transition-all"
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
