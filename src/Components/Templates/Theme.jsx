import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function Theme() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      onClick={toggleTheme}
      className="flex items-center gap-2 bg-(--card) p-1 rounded-full cursor-pointer border border-black/10 dark:border-white/10"
    >

      <div
        className={`p-2 rounded-full transition ${
          theme === "light" ? "bg-(--primary) text-white" : "text-(--text)"
        }`}
      >
        <CiLight size={18} />
      </div>

      <div
        className={`p-2 rounded-full transition ${
          theme === "dark" ? "bg-(--primary) text-white" : "text-(--text)"
        }`}
      >
        <FaMoon size={18} />
      </div>

    </div>
  );
}