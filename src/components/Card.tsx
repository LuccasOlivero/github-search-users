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
      <h2>{repository.name}</h2>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
}
