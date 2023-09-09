import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BiHomeAlt2,
  BiCollection,
  BiImages,
  BiBook,
  BiSolidMoon,
  BiSolidSun,
  BiSearch,
} from "react-icons/bi";
import { FiX, FiMenu } from "react-icons/fi";
import { Data } from "../../utils/constant/navbar";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActivePage(path);
    navigate(path);
  }, [navigate]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main>
      <nav className="fixed inset-x-0 top-0 z-50 bg-pureWhite shadow-sm">
        {/* Desktop Navbar */}
        <div className="container mx-auto flex flex-row items-center justify-between px-4 py-4 lg:py-4">
          <h1 className="select-none font-extrabold text-black">
            Unsplash Fetch
          </h1>

          <div className="hidden lg:flex">
            <ul className="flex gap-8">
              {Data.map((item) => (
                <li
                  key={item.name}
                  className={`font-semibold text-black ${
                    activePage === item.direct ? "text-black" : "opacity-60"
                  }`}
                >
                  <Link to={item.direct}>{item.name}</Link>
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
              <FiMenu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 left-0 right-0 top-0 z-40 bg-pureWhite shadow-sm dark:bg-white dark:text-black lg:hidden">
            <div className="container mx-auto px-4 py-4">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="select-none font-extrabold text-black">
                  Unsplash Fetch
                </h1>
                <button onClick={toggleMobileMenu}>
                  <FiX size={20} />
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
        <div className="fixed inset-x-0 bottom-0 z-50 m-4 rounded-3xl bg-pureWhite py-4 shadow-md lg:hidden">
          <div>
            <ul className="flex justify-around">
              {Data.map((item) => (
                <li key={item.name}>
                  <Link to={item.direct}>
                    {item.direct === "/" && (
                      <BiHomeAlt2
                        size={20}
                        style={{
                          color: activePage === "/" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.direct === "/search" && (
                      <BiSearch
                        size={20}
                        style={{
                          color: activePage === "/search" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.direct === "/photos" && (
                      <BiImages
                        size={20}
                        style={{
                          color: activePage === "/photos" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.direct === "/collections" && (
                      <BiCollection
                        size={20}
                        style={{
                          color:
                            activePage === "/collections" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.direct === "/topics" && (
                      <BiBook
                        size={20}
                        style={{
                          color: activePage === "/topics" ? "black" : "grey",
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
