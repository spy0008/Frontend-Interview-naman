import { useState, useEffect } from "react";
import { useGetAllBlogs } from "@/hooks/UseGetAllBlogs";
import { useGetBlogById } from "@/hooks/UseGetSingleBlog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import { getReadingTime } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const AllBlogCards = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const { data: blogs, isLoading } = useGetAllBlogs();
  const { data: singleBlog, isLoading: isBlogLoading } = useGetBlogById(
    selectedBlogId ?? 0
  );

  useEffect(() => {
    if (blogs?.length && selectedBlogId === null) {
      setSelectedBlogId(blogs[0].id);
    }
  }, [blogs, selectedBlogId]);

  return (
    <section className="w-full space-y-12">
      <Swiper
        modules={[FreeMode]}
        spaceBetween={20}
        freeMode
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-6"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SwiperSlide key={i}>
                <BlogCardSkeleton />
              </SwiperSlide>
            ))
          : blogs?.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Card
                  onClick={() => setSelectedBlogId(blog.id)}
                  className={`
                    cursor-pointer h-50
                    transition-all duration-300 ease-out
                    hover:scale-[1.001]
                    hover:border-amber-300
                    hover:shadow-[0_10px_30px_rgba(251,191,36,0.25)]
                    active:scale-[0.97]
                    ${
                      selectedBlogId === blog.id
                        ? "border-b-amber-400 border-b-4 scale-[1]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 flex justify-between items-center -mt-4">
                    <span className="border px-2 rounded-2xl text-sm">
                      {blog.category[0]}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {blog.date.slice(0, 10)}
                    </span>
                  </div>

                  <CardHeader className="-ml-1 -mt-3">
                    <CardTitle className="line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {blog.description}
                    </CardDescription>
                  </CardHeader>

                  {blog.category[1] && (
                    <CardContent className="-ml-1">
                      <span className="border border-b-amber-300 border-b-4 px-3 py-1 rounded-xl text-sm">
                        {blog.category[1]}
                      </span>
                    </CardContent>
                  )}
                </Card>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className="w-full">
        {isBlogLoading && (
          <p className="text-center text-muted-foreground">
            Loading blog...
          </p>
        )}

        {singleBlog && (
          <article className="max-w-4xl mx-auto space-y-5">
            <img
              src={singleBlog.coverImage}
              alt={singleBlog.title}
              className="h-64 md:h-80 w-full rounded-xl object-cover"
            />

            <h1 className="text-3xl md:text-5xl font-bold">
              {singleBlog.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <i className="ri-time-line"></i>
              {getReadingTime(
                `${singleBlog.title} ${singleBlog.description} ${singleBlog.content}`
              )}{" "}
              min read
            </div>

            <div className="flex flex-wrap gap-2">
              {singleBlog.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-gray-200 px-3 py-1 text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed">
              {singleBlog.content}
            </p>
          </article>
        )}
      </div>
    </section>
  );
};

export default AllBlogCards;
