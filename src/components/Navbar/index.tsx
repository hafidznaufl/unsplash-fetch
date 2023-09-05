import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiCollection, BiImages, BiBook } from "react-icons/bi";
import { Data } from "../../utils/constant/navbar";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");

  return (
    <main>
      <nav className="bg-pureWhite shadow-sm fixed inset-x-0 top-0 z-50">
        {/* Desktop Navbar */}
        <div className="container mx-auto px-2 hidden sm:flex flex-row justify-between items-center py-4">
          <h1 className="select-none text-base text-black font-extrabold sm:flex">
            Unsplash Fetch
          </h1>
          <div className="hidden sm:flex">
            <ul className="flex gap-8">
              {Data.map((item) => (
                <li
                  key={item.name}
                  className="font-semibold text-primary hover:text-black"
                >
                  <Link to={item.direct}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            {/* Dark Mode & Login Register */}
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
                        size={21}
                        style={{
                          color: activePage === "Home" ? "black" : "#6b6b6b",
                        }}
                      />
                    )}
                    {item.name === "Photos" && (
                      <BiImages
                        size={21}
                        style={{
                          color: activePage === "Photos" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.name === "Collections" && (
                      <BiCollection
                        size={21}
                        style={{
                          color:
                            activePage === "Collections" ? "black" : "grey",
                        }}
                      />
                    )}
                    {item.name === "Topics" && (
                      <BiBook
                        size={21}
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
