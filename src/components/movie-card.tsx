import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import { Movie } from "@/types";

const MovieCard = ({ description, upVoted, poster }: Movie) => {
  return (
    <Card className="grid grid-cols-3 gap-2 px-3 py-4">
      {/* First Column */}
      <div className="flex flex-col justify-center max-w-10 gap-3">
        <Button size={"icon"}>
          <ChevronUp className="w-4 h-4" />
        </Button>
        <p>{upVoted?.length}</p>
        <Button size={"icon"}>
          <ChevronUp className="w-4 h-4" />
        </Button>
      </div>

      {/* Second Column */}
      <div className="flex justify-center">
        <img
          src={poster}
          alt="movie-poster"
          className="rounded-md object-cover"
        />
      </div>

      {/* Third Column */}
      <div>{/* Your content goes here */}</div>
    </Card>
  );
};

export default MovieCard;
