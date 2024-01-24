import fetcher from "@/lib/fetcher";
import React from "react";
import useSWR from "swr";
const useMovie = (movieId: string) => {
  const { data, error, isLoading } = useSWR(`/api/movies/${movieId}`, fetcher);

  return { data, error, isLoading };
};

export default useMovie;
