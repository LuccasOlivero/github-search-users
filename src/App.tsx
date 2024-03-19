import Card from "./components/Card";
import { useFetchRepos } from "./hooks/useRepo";
import { useFavoriteReposStore } from "./store/favoriteRepos";

export default function App() {
  const { data, isLoading } = useFetchRepos();
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>is loading...</div>;

  return (
    <div>
      {data?.map((repository) => {
        return (
          <Card
            key={repository.id}
            repository={repository}
            isFavorite={favoriteReposIds.includes(repository.id)}
          />
        );
      })}
    </div>
  );
}
