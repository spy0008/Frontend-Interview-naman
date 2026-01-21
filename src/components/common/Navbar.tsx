import PostBlogModal from "@/components/common/PostBlogModal";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-white/20 shadow-sm
      "
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <i className="ri-blogger-line text-xl text-amber-500" />
          <span>CA Blogs</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
          >
            Blogs
          </a>
        </div>

        <PostBlogModal />
      </div>
    </nav>
  );
};

export default Navbar;
