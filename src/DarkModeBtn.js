import React, { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { AppContext } from "./context";

const DarkModeBtn = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <div className="flex justify-center p-2 space-x-2 text-lg">
      {darkMode ? (
        <BsSun
          className="cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />
      ) : (
        <BsMoon
          className="cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />
      )}
    </div>
  );
};

export default DarkModeBtn;
