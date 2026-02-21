import { FaBookOpen } from "react-icons/fa";

export default function Navbar() {
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
      <div className="">Dark / light mode</div>
    </nav>
  );
}
