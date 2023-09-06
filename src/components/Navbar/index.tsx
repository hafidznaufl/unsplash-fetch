import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BiHomeAlt2,
  BiCollection,
  BiImages,
  BiBook,
  BiSolidMoon,
  BiSolidSun,
} from "react-icons/bi";
import { Data } from "../../utils/constant/navbar";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <main>
      <nav className="bg-pureWhite shadow-sm fixed inset-x-0 top-0 z-50">
        {/* Desktop Navbar */}
        <div className="container mx-auto px-2 hidden sm:flex flex-row justify-between items-center py-4">
          <h1 className="select-none text-black font-extrabold">
            Unsplash Fetch
          </h1>
          <div className="hidden sm:flex">
            <ul className="flex gap-8">
              {Data.map((item) => (
                <li key={item.name} className="hovermenu">
                  <Link to={item.direct}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Dark Mode Toggle */}
          <div className="flex gap-2 items-center">
            <button className="outline_btn" onClick={toggleDarkMode}>
              {darkMode ? <BiSolidSun size={20} /> : <BiSolidMoon size={20} />}
            </button>
            {/* Login & Register buttons */}
            <button className="black_btn">Login</button>
            <button className="outline_btn">Register</button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="py-4 fixed inset-x-0 bottom-0 z-50 border-y-2 bg-pureWhite sm:hidden">
          <div>
            <ul className="flex justify-around">
              {Data.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.direct}
                    onClick={() => setActivePage(item.name)}
                  >
                    {item.name === "Home" && (
                      <BiHomeAlt2
                        size={20}
                        style={{
                          color: activePage === "Home" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.name === "Photos" && (
                      <BiImages
                        size={20}
                        style={{
                          color: activePage === "Photos" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.name === "Collections" && (
                      <BiCollection
                        size={20}
                        style={{
                          color:
                            activePage === "Collections" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.name === "Topics" && (
                      <BiBook
                        size={20}
                        style={{
                          color: activePage === "Topics" ? "black" : "grey",
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
