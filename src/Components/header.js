import { useState } from "react";
import { ReactComponent as Logo } from "../design/logo.svg";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-12 my-1 rounded-full bg-teal-500 border-0 border-solid transition ease transform duration-200`;
  const closeMenu = () => {
    setIsNavOpen(false);
    document.getElementById("menu").classList.add("hideMenuNav");
  };

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
    document.getElementById("menu").classList.toggle("hideMenuNav");
  };

  return (
    <div className="w-full z-50 flex items-center justify-between bg-[#102a43] text-black py-2 pr-20 pl-10 sm:pr-28 top-0">
      <a href="/" id="home">
        <Logo className="buttons w-18.08 h-20" />
      </a>
      <nav>
        <section className="flex">
          <button
            className="flex flex-col h-12 w-16 bg-[#102a43] rounded justify-center items-center group fixed top-6"
            onClick={toggleMenu}
            style={{ zIndex: 1000 }}
          >
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>

          <ul
            id="menu"
            className={`flex flex-col items-center justify-between min-h-[250px] ${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            }`}
          >
            <div className="border-4 border-transparent border-l-teal-500 p-6">
              <li className="text-4xl cursor-pointer">
                <a
                  href="/"
                  id="home"
                  className="px-4 py-2 text-white hover:text-teal-500"
                >
                  Home
                </a>
              </li>
              <li className="my-8 text-4xl cursor-pointer">
                <a
                  href="/projects"
                  className="px-4 py-2 text-white hover:text-teal-500"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li className="my-8 text-4xl cursor-pointer">
                <a
                  href="/about"
                  className="px-4 py-2 text-white hover:text-teal-500"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li className="my-8 text-4xl cursor-pointer">
                <a
                  href="/contact"
                  className="px-4 py-2 text-white hover:text-teal-500"
                  onClick={closeMenu}
                >
                  Get in Touch!
                </a>
              </li>
            </div>
          </ul>
        </section>
      </nav>
      <style>{`
.hideMenuNav { 
  display: none; 
} 
.showMenuNav { 
  position: fixed;
  width: 100%; 
  height: 100vh; 
  top: 0; 
  left: 0;
  z-index: 999;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
}
`}</style>
    </div>
  );
}
