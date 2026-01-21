
const Footer = () => {
  return (
    <footer className="bg-white text-black border-t mt-5 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <i className="ri-blogger-line text-2xl"></i>
            CA Blogs
          </div>
          <p className="text-gray-400 max-w-sm">
            Your go to place for tech insights, AI trends, and startup tips.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <div className="flex flex-col gap-1">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Blogs
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-1">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-xl transition-colors"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-xl transition-colors"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-xl transition-colors"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-xl transition-colors"
            >
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} CA Blogs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
