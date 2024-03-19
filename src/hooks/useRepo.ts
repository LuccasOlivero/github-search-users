import { useQuery } from "@tanstack/react-query";
import { api } from "../api/github";
import { Repository } from "./types";

export async function fetchRepos() {
  const { data } = await api.get<Repository[]>("/users/luccasolivero/repos");
  return data;
}

export function useFetchRepos() {
  return useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });
}
