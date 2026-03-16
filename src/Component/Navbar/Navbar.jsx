import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-GdqARQRt.png";
import { Link, NavLink } from "react-router";
import { IoSearch } from "react-icons/io5";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const NavLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "المدونة", path: "/blog" },
    { name: "من نحن", path: "/aboutus" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20  flex items-center px-6 transition-all duration-300
        ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#222]" : "bg-[#161616] border-b border-transparent"}`}
      >
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex flex-row items-center gap-2 group">
            <img
              alt="Photography Logo"
              src={logo}
              className="w-11 h-11 object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </h1>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          
          <ul className="hidden md:flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white px-5 py-2.5 rounded-full text-sm font-medium bg-linear-to-r from-orange-500 to-orange-600 block"
                      : "text-[#a1a1a1] px-5 py-2.5 rounded-full text-sm font-medium hover:text-white transition-colors block"
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex p-3 text-neutral-500 hover:text-orange-500 rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] cursor-pointer">
              <IoSearch className="w-5 h-5" />
            </button>
            <Link to="/blog" className="btn-primary hidden! md:inline-flex!">
              ابدأ القراءة
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white border hover:border-[#262626] border-transparent hover:bg-[#1a1a1a] rounded-lg transition-all cursor-pointer"
            >
              {menuOpen ? (
                <RiCloseLine className="w-5 h-5" />
              ) : (
                <RiMenuLine className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      
      {menuOpen && (
        <div
          dir="rtl"
          className="fixed top-16 left-0 right-0 bottom-0 z-50 bg-[#161616]/95 backdrop-blur-md md:hidden "
        >
          <div className="flex flex-col px-6 py-4 gap-2">
            {NavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6900] px-4 py-3 rounded-xl text-sm font-medium bg-linear-to-r bg-orange-500/10 border border-orange-500/30 block"
                    : "text-[#a1a1a1] px-4 py-3 rounded-xl text-sm hover:text-white hover:bg-[#1a1a1a] transition-colors block"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center mt-2"
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
