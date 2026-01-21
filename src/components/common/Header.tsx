const Header = () => {
  return (
    <header className="relative overflow-hidden pt-12 border-b">
      <div className="absolute inset-0 bg-linear-to-br from-amber-100/40 via-transparent to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto flex min-h-55 max-w-6xl flex-col items-center justify-center px-4 text-center md:min-h-65">
        <span className="mb-4 rounded-full border border-amber-300/60 bg-amber-100 px-4 py-1 text-xs font-medium text-amber-700">
          Knowledge • Finance • Growth
        </span>

        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          CA Monk <span className="text-amber-500">Blog</span>
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          Stay updated with the latest trends in finance, accounting, tax,
          startups, and career growth — written for modern professionals.
        </p>
      </div>
    </header>
  );
};

export default Header;
