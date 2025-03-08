import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import './Theme.css'

const Theme_toggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // লোকাল স্টোরেজে সংরক্ষণ
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-400 rounded-lg transition-all"
    >
      {theme === "dark" ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-900" />}
    </button>
  );
};

export default Theme_toggle;
