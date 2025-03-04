const Footer = () => {
  return (
    <footer className="shadow-sm bg-blue-950 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.png"
              className="h-18 w-15"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Newsify
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium sm:mb-0">
            <li>
              <a href="https://www.linkedin.com/in/devashish-kunwar-533895177/" target="_blank" className="me-4 md:me-6 hover:text-black transform transition-all duration-300 hover:text-xl hover:bg-white hover:p-3 hover:rounded-lg">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Dev05-24" target="_blank" className="hover:text-black transform transition-all duration-300 hover:text-xl hover:bg-white hover:p-3 hover:rounded-lg me-4 md:me-6">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/devashishkunwar/" target="_blank" className="hover:text-black transform transition-all duration-300 hover:text-xl hover:bg-white hover:p-3 hover:rounded-lg me-4 md:me-6">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg sm:text-center font-semibold">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Newsify
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
