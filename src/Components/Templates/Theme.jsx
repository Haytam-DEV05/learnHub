import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
  }, [theme]);

  const handleBtnTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="cursor-pointer text-(--text)" onClick={handleBtnTheme}>
      {theme == "light" ? <FaMoon size={25} /> : <CiLight size={25} />}
    </div>
  );
}
