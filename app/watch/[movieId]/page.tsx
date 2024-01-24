"use client";
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
      <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
          <AiOutlineArrowLeft
            onClick={() => {
              Router.push("/");
            }}
            className="text-white cursor-pointer"
            size={40}
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            <span className="font-light">Watching : </span>
            {data?.title}
          </p>
        </nav>
        <video
          className="w-full h-full "
          src={data?.videoUrl}
          autoPlay
          controls
          loop></video>
      </div>
    </>
  );
};

export default watch;
