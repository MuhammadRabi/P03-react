import { useContext } from "react";
import { AppContext } from "./context";

const Layout = ({ children }) => {
  const { darkMode } = useContext(AppContext);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="flex items-start justify-center h-screen px-5 mx-auto bg-white md:px-10 lg:px-20 dark:bg-gray-800">
        {children}
      </div>
    </main>
  );
};

export default Layout;
