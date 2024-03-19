import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";

interface CardProps {
  repository: Repository;
  isFavorite: boolean;
}

export default function Card({ repository, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }

    addFavoriteRepo(repository.id);
  };

  return (
    <div>
      <h2 className="relative flex justify-between px-2 bg-black text-white w-full border border-zinc-800 rounded-lg h-[3.3rem] items-center">
        <a href={repository.html_url} target="_blank">
          {repository.name}
        </a>
        <span className="absolute text-[10px] bottom-[4px] text-zinc-500">
          {repository.created_at}
        </span>
        <button
          className=" text-white font-normal rounded-lg w-14 border border-zinc-600 text-xs h-6 bg-[#111] hover:bg-zinc-800 transition-all"
          onClick={toggleFavorite}
        >
          {isFavorite ? "Dislike" : "Like"}
        </button>
      </h2>
    </div>
  );
}
