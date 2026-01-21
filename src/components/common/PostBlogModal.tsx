import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateBlog } from "@/hooks/UseCreateBlog";
import type { BlogCategory } from "@/types/blogs";

const BLOG_CATEGORIES: BlogCategory[] = ["FINANCE", "TECH", "AI", "STARTUP"];

const PostBlogModal = () => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<BlogCategory[]>(
    [],
  );

  const { mutate: createBlog, isPending } = useCreateBlog();

  const toggleCategory = (category: BlogCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setContent("");
    setCoverImage("");
    setSelectedCategories([]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedCategories.length) {
      alert("Please select at least one category");
      return;
    }

    createBlog(
      {
        title,
        description,
        category: selectedCategories,
        content,
        coverImage,
        date: new Date().toISOString(), // just for now
      },
      {
        onSuccess: () => {
          resetForm();
          setOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex hover:bg-amber-500 active:scale-95 transition-all duration-200 cursor-pointer items-center gap-2">
          <i className="ri-add-line text-lg" />
          Post Blog
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <Input
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Input
            placeholder="Cover image URL"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            required
          />

          <div className="space-y-2">
            <p className="text-sm font-medium">Categories</p>
            <div className="grid grid-cols-2 gap-3">
              {BLOG_CATEGORIES.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          <Textarea
            placeholder="Write your blog content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            required
          />

          <div className="flex justify-center pt-3">
            <Button className="hover:bg-amber-200 transition-colors duration-200 cursor-pointer" type="submit" disabled={isPending}>
              {isPending ? "Publishing..." : "Publish"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostBlogModal;
