import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="h-15 border-b shadow-sm px-5 py-3">
      <div className="flex items-center justify-between">
        <div>
          <i className="ri-blogger-line lg:text-xl"> CA Blogs</i>
        </div>
        <div className="flex gap-10 pr-10 lg:pr-25 items-center">
          <div className="lg:text-lg font-medium hover:underline transsition-all duration-200">
            <a href="">Home</a>
          </div>
          <div className="lg:text-lg font-medium hover:underline transsition-all duration-200">
            <a href="">Blogs</a>
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            className="cursor-pointer hover:bg-amber-300 transition-all duration-200 active:scale-95 "
          >
            Post
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
