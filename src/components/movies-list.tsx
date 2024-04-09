import { Movie } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import LoadingCard from "./loading-card";
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
        setLoading(false);
        setData(data.result);
      } catch (error) {
        toast.error("Something went wrong!");
      }
    };

    fetchData();
  }, []);

  const loadingCards = new Array(5).fill(null);

  return (
    <section className="sm:max-w-sm md:max-w-md mx-auto py-6 md:py-8 lg:py-12 gap-4 flex flex-col px-2 sm:px-4 lg:max-w-lg">
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
      {loading && loadingCards.map((_, index) => <LoadingCard key={index} />)}
    </section>
  );
};

export default MoviesList;
