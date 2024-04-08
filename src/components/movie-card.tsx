import { Card } from "@/components/ui/card";
import { Movie } from "@/types";
import { ChevronUp, Play } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const MovieCard = ({
  language,
  upVoted,
  poster,
  title,
  genre,
  director,
  stars,
  releasedDate,
  pageViews,
}: Movie) => {
  const genres = genre.split(",");
  const capitalizedGenres = genres.map((genre) =>
    capitalizeFirstLetter(genre.trim())
  );
  const formattedGenres = capitalizedGenres.join(", ");
  const date = new Date(releasedDate * 1000);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const PClass = "text-sm md:text-[15px]";

  return (
    <Card className="grid grid-cols-12 gap-2 px-1 md:px-3 py-2 md:py-4">
      {/* First Column */}
      <div className="col-span-2 flex flex-col items-center justify-center gap-3">
        <Button size={"icon"} variant={"outline"}>
          <ChevronUp className="w-4 h-4 text-green-500" />
        </Button>
        <p className="text-center text-muted-foreground">{upVoted?.length}</p>
        <Button size={"icon"} variant={"outline"}>
          <ChevronUp className="w-4 h-4 text-red-500" />
        </Button>
        <p className="text-center text-xs">Votes</p>
      </div>

      {/* Second Column */}
      <div className="col-span-4 flex justify-center">
        <img
          src={poster}
          alt="movie-poster"
          className="rounded-md object-cover"
        />
      </div>

      {/* Third Column */}
      <div className="col-span-6 flex flex-col pl-2">
        <h2 className="text-base md:text-xl font-medium">{title}</h2>
        <p className={PClass}>Genre: {formattedGenres}</p>
        <p className={PClass}>Director: {director}</p>
        <p className={`${PClass} truncate`}>Starring: {stars}</p>
        <p className={PClass}>
          Mins | {language} | {formattedDate}
        </p>
        <p
          className={cn(PClass, "text-primary")}
        >{`${pageViews} views | Voted by ${upVoted?.length}`}</p>
      </div>
      <div className="col-span-12 flex justify-center">
        <Button className="w-full max-w-xs">
          Watch Trailor <Play className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </Card>
  );
};

export default MovieCard;
