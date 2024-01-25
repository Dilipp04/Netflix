"use client";
import FavoriteButton from "@/components/FavoriteButton";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface MovieParams {
  movieId: string;
}

const watch = ({ params }: { params: MovieParams }) => {
  const Router = useRouter();

  const { movieId } = params;
  const { data } = useMovie(movieId as string);
  return (
    <>
      <div className="h-screen w-screen bg-zinc-900">
        <nav className="sticky sm:fixed w-full px-4 py-2 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-60">
          <AiOutlineArrowLeft
            onClick={() => {
              Router.push("/");
            }}
            className="text-white cursor-pointer"
            size={25}
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            <span className="font-light">Watching : </span>
            {data?.title}
          </p>
        </nav>
        <video
          className="w-full h-[56.25vw] sm:h-full"
          src={data?.videoUrl}
          poster={data?.thumbnailUrl}
          autoPlay
          controls
          loop></video>
        <div className="w-full p-3 sm:invisible">
          <div className="float-end">
            <FavoriteButton movieId={data?.id} />
          </div>
          <p className="text-white text-lg font-semibold my-3">{data?.genre}</p>
          <p className="text-white text-md">{data?.description}</p>
          <p className="text-gray-600 text-sm">{data?.duration}</p>
        </div>
      </div>
    </>
  );
};

export default watch;
