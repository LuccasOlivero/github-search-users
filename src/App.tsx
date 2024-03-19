import Card from "./components/Card";
import { useFetchRepos } from "./hooks/useRepo";
import { useFavoriteReposStore } from "./store/favoriteRepos";

export default function App() {
  const { favoriteReposIds } = useFavoriteReposStore();
  const { data, isLoading } = useFetchRepos("luccasolivero");

  return (
    <>
      <div className="w-[70%] h-full m-auto">
        <h1 className=" text-white text-2xl font-bold">Repos</h1>

        {isLoading && (
          <>
            <div className="h-lvh w-full bg-black flex items-center justify-center text-4xl text-white">
              Is loading...
            </div>
          </>
        )}
        <div>
          <p className="relative border-b border-zinc-800 w-full text-[.5rem] text-zinc-500 flex justify-between">
            try looking for an github user
            <input className="text-white relative bg-[#111] rounded-sm p-1 top-[-.5rem]" />
          </p>
        </div>

        <div className="bg-[#111] p-3 mt-2 rounded-sm">
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
      </div>
    </>
  );
}
