import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BiHomeAlt2,
  BiCollection,
  BiImages,
  BiBook,
  BiSolidMoon,
  BiSolidSun,
  BiMenuAltRight,
  BiChevronLeft,
} from "react-icons/bi";
import { Data } from "../../utils/constant/navbar";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main>
      <nav className="fixed inset-x-0 top-0 z-50 bg-pureWhite shadow-sm">
        {/* Desktop Navbar */}
        <div className="container mx-auto flex flex-row items-center justify-between px-2 py-4 lg:py-4">
          <h1 className="select-none font-extrabold text-black">
            Unsplash Fetch
          </h1>

          <div className="hidden lg:flex">
            <ul className="flex gap-8">
              {Data.map((item) => (
                <li
                  key={item.name}
                  className={`hovermenu ${
                    activePage === item.name ? "text-black" : "opacity-60"
                  }`}
                >
                  <Link
                    to={item.direct}
                    onClick={() => setActivePage(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dark Mode Toggle */}
          <div className="hidden items-center gap-2 lg:flex">
            <button className="outline_btn" onClick={toggleDarkMode}>
              {darkMode ? <BiSolidSun size={20} /> : <BiSolidMoon size={20} />}
            </button>

            {/* Login & Register buttons */}
            <button className="black_btn">Login</button>
            <button className="outline_btn">Register</button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center justify-center lg:hidden">
            <button onClick={toggleMobileMenu}>
              <BiMenuAltRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 left-0 right-0 top-0 z-40 bg-pureWhite shadow-sm dark:bg-white dark:text-black lg:hidden">
            <div className="container mx-auto px-2 py-4">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="select-none font-extrabold text-black">
                  Unsplash Fetch
                </h1>
                <button onClick={toggleMobileMenu}>
                  <BiChevronLeft size={20} />
                </button>
              </div>
              {/* Login & Register buttons */}
              <div className="flex flex-col gap-2">
                <button className="black_btn">Login</button>
                <button className="outline_btn">Register</button>
              </div>
              {/* Dark Mode Toggle */}
              <div className="mt-2 flex justify-center">
                <button className="outline_btn w-full" onClick={toggleDarkMode}>
                  {darkMode ? (
                    <BiSolidSun size={20} />
                  ) : (
                    <BiSolidMoon size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navbar */}
        <div className="fixed inset-x-0 bottom-0 z-50 m-2 rounded-3xl bg-pureWhite py-4 shadow-md lg:hidden">
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
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
