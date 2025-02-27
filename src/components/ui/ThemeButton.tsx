"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeButton(props: { className?: string }) {
  const { className = "" } = props;
  const { theme, setTheme } = useTheme();

  function handleOnClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={handleOnClick}
      className={className}
    >
      <div className="w-5 h-5 text-on-surface-dark hidden dark:block">
        <FaSun />
      </div>
      <div className="w-5 h-5 text-on-surface dark:hidden">
        <FaMoon />
      </div>
    </button>
  );
}
