import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const LoadingCard = () => {
  return (
    <Card className="grid grid-cols-12 gap-2 px-1 md:px-3 py-2 md:py-4 h-[230px]">
      {/* First Column */}
      <div className="col-span-2 flex flex-col items-center justify-center gap-3">
        <Skeleton className="w-10 h-10" />
        <Skeleton className="w-10 h-10" />
        <Skeleton className="w-10 h-10" />
      </div>

      {/* Second Column */}
      <div className="col-span-4 flex justify-center">
        <Skeleton className="h-full w-full rounded-md" />
      </div>

      {/* Third Column */}
      <div className="col-span-6 flex flex-col pl-2 gap-3">
        <Skeleton className="h-12 w-full rounded-md" />
        <Skeleton className="h-12 w-full rounded-md" />
        <Skeleton className="h-12 w-full rounded-md" />
      </div>
    </Card>
  );
};

export default LoadingCard;
