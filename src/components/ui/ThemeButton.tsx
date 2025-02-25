"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  function handleOnClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button aria-label="Toggle theme" onClick={handleOnClick}>
      {theme === "dark" ? (
        <FaSun className="w-5 h-5 text-gray-200" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-900" />
      )}
    </button>
  );
}
