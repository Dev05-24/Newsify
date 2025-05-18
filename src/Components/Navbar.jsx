import { useState } from "react";
import { Menu, X } from "lucide-react";
import PropTypes from "prop-types";
const Navbar = ({setCategory}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <> 
      <header>
        <nav className="fixed top-0 border-gray-200 px-4 lg:px-6 py-2.5  w-full z-50 bg-blue-950">
          <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
            <a href="" className="flex items-center justify-center font-bold">
              <img
                src="./images/logo.png"
                className="mr-3 h-15"
                alt="Portfolio Logo"
              />
              <button onClick={() => setCategory("general")} className="text-xl cursor-pointer">Newsify</button>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={23} /> : <Menu size={23} />}
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 sm:text-center`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3">
                <button onClick={() =>setCategory("general")}>
                  <a
                    href="#"
                    className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b"
                    aria-current="page"
                  >
                    General
                  </a>
                </button>
                <button onClick={() =>setCategory("Health")}>
                  <a
                    href="#"
                    className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b"
                    aria-current="page"
                  >
                    Health
                  </a>
                </button>
                <button onClick={() =>setCategory("entertainment")}>
                  <a
                    href="#"
                    className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b"
                  >
                    Entertainment
                  </a>
                </button>
                <button onClick={() =>setCategory("science")}>
                  <a
                    href="#"
                    className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b"
                  >
                    Science
                  </a>
                </button>
                <button onClick={() =>setCategory("technology")}>
                  <a
                    href="#"
                    className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b"
                  >
                    Technology
                  </a>
                </button>
                <button onClick={() =>setCategory("business")}>
                  <a
                    href="#"
                    className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b"
                  >
                    Business
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

Navbar.protoTypes = {
  setCategory : PropTypes.func.isRequired
}
export default Navbar;
