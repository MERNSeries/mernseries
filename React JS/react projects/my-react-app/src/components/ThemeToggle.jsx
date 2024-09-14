import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </>
  );
};

export default ThemeToggle;
