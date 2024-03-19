import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { api } from "../api/github";
import { Repository } from "./types";

export async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubuser] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/${githubuser}/repos`);
  return data;
}

export function useFetchRepos(githubUser: string) {
  return useQuery({
    queryKey: ["repos", githubUser],
    queryFn: fetchRepos,
  });
}
