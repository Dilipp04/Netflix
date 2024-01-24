"use client";
import useBillboard from "@/hooks/useBillboard";
import React, { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModel from "@/hooks/useInfoModel";

const Billboard = () => {
  const { data } = useBillboard();
  const { openModel } = useInfoModel();
  const handleOpenModel = useCallback(() => {
    openModel(data?.id);
  }, [openModel, data?.id]);
  return (
    <>
      <div className="relative h-[56.25vw] ">
        <video
          className="w-full h-[56.25vw] brightness-[60%] object-cover"
          autoPlay
          muted
          loop
          poster={data?.thumbnailUrl}
          src={data?.videoUrl}></video>
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
            {data?.title}
          </p>
          <p className="text-white text-[8px] md:text-lg md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
            {data?.description}
          </p>
          <div className="flex flex-row gap-3 mt-3 md:mt-4 items-center">
            <PlayButton movieId={data?.id} />
            <button
              onClick={handleOpenModel}
              className="
            bg-white 
            text-white
            bg-opacity-30
            rounded-md
            py-1 md:py-2
            px-2 md:px-4
            font-semibold
            text-xs lg:text-lg
            flex flex-row items-center
            hover:bg-opacity-20
            transition
            ">
              <AiOutlineInfoCircle className="mr-1" size={30} />
              More info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billboard;
