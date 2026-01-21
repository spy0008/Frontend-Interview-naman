import type { BlogCoverImageProps } from "@/types/blogs";
import { useState } from "react";

const BlogCoverImage = ({ src, alt }: BlogCoverImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-200">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-opacity duration-500 ease-out
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
};

export default BlogCoverImage;
