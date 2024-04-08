import { Movie } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import MovieCard from "./movie-card";

const MoviesList = () => {
  const [data, setData] = useState<Movie[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post("https://hoblist.com/api/movieList", {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        });
        console.log(data.result);
        setLoading(false);
        setData(data.result);
      } catch (error) {
        toast.error("Something went wrong!");
      }
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-md mx-auto py-8 lg:py-12 gap-4 flex flex-col">
      {data?.map((movie) => (
        <MovieCard
          key={movie._id}
          _id={movie._id}
          upVoted={movie.upVoted}
          downVoted={movie.downVoted}
          totalVoted={movie.totalVoted}
          voting={movie.voting}
          director={movie.director}
          writers={movie.writers}
          stars={movie.stars}
          releasedDate={movie.releasedDate}
          productionCompany={movie.productionCompany}
          title={movie.title}
          language={movie.language}
          runTime={movie.runTime}
          genre={movie.genre}
          voted={movie.voted}
          poster={movie.poster}
          pageViews={movie.pageViews}
          description={movie.description}
        />
      ))}
    </section>
  );
};

export default MoviesList;
