import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <Card className="transition-all duration-300">
      <div className="px-4 flex justify-between items-center -mt-4">
        <Skeleton className="h-6 w-20 rounded-2xl bg-gray-200" />
        <Skeleton className="h-4 w-24 bg-gray-200" />
      </div>

      <CardHeader className="-ml-1 -mt-3 space-y-2 ">
        <Skeleton className="h-6 w-4/5 bg-gray-200" />
        <Skeleton className="h-4 w-full bg-gray-200" />
        <Skeleton className="h-4 w-5/6 bg-gray-200" />
      </CardHeader>

      <CardContent className="-ml-1">
        <Skeleton className="h-6 w-24 rounded-xl bg-gray-200" />
      </CardContent>
    </Card>
  );
};

export default BlogCardSkeleton;
