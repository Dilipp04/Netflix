"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorite from "@/hooks/useFavorite";
import InfoModel from "@/components/InfoModel";
import useInfoModel from "@/hooks/useInfoModel";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "unauthenticated") router.push("/auth");
  }, [session?.status]);

  const { data: movies = [] } = useMovieList();
  const { data: favoriteMovies = [] } = useFavorite();

  const { data: user } = useCurrentUser();

  const { isOpen, closeModel } = useInfoModel();
  return (
    <>
      <InfoModel visible={isOpen} onClose={closeModel} />
      <Navbar />
      <Billboard />
      <div className="">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favoriteMovies} />
      </div>
    </>
  );
}
