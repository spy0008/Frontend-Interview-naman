import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/modules/BlogsPage";
import type { Blog, CreateBlogPayload } from "@/types/blogs";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation<Blog, Error, CreateBlogPayload>({
    mutationFn: (payload) => createBlog(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-blogs"] });
    },
  });
};
