"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModel from "@/hooks/useInfoModel";
import useMovie from "@/hooks/useMovie";

interface InfoModelProps {
  visible: boolean;
  onClose: any;
}

const InfoModel: React.FC<InfoModelProps> = ({ visible, onClose }) => {
  const [isVisible, setisVisible] = useState(!!visible);
  const { movieId } = useInfoModel();
  const { data = {} } = useMovie(movieId as string);

  useEffect(() => {
    setisVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setisVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }
  return (
    <div
      className="
  z-50
  transition
  duration-300
  bg-black
  bg-opacity-70
  flex
  justify-center
  items-center
overflow-x-hidden
overflow-y-auto
fixed
inset-0
offset-2
  ">
      <div className="relative w-auto mx-auto max-x-3xl rounded-md overflow-hidden">
        <div
          className={`
        ${isVisible ? " scale-100" : "scale-0"}
        transform
        duration-300
        relative
        flex-auto
        bg-zinc-900
        drop-shadow-md
        `}>
          <div className="relative h-96">
            <video
              className="w-full brightness-[60%] object-cover h-full"
              autoPlay
              loop
              muted
              poster={data?.thunbnailUrl}
              src={data?.videoUrl}></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4  items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-white text-lg">{data?.duration}</p>
            <p className="text-white text-lg">{data?.genre}</p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModel;
