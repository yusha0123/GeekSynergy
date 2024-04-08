import MoviesList from "@/components/movies-list";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="w-full">
      <Navbar />
      <MoviesList />
    </main>
  );
};

export default Home;
