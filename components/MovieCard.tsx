import React, { useCallback } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";
import useInfoModel from "@/hooks/useInfoModel";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModel } = useInfoModel();

  const handleOpen = useCallback(() => {
    openModel(data?.id);
  }, [openModel, data?.id]);
  return (
    <>
      <div
        className="group bg-zinc-900  sm:col-span-1 relative w-[42vw] sm:w-auto  h-[24vw]
        sm:h-[12vw]">
        <img
          onClick={() => router.push(`/watch/${data?.id}`)}
          className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-200
        w-full
    h-[24vw]
        sm:h-[12vw]
        "
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />

        <div
          className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-200
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[1vw]
        group-hover:translate-x-[0vw]
        group-hover:opacity-100
        ">
          <img
            className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
          "
            src={data.thumbnailUrl}
            alt="thumbnail"
          />

          <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
            <div className="flex flex-row items-center gap-3">
              <div
                onClick={() => router.push(`/watch/${data?.id}`)}
                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                <BsFillPlayFill size={30} />
              </div>
              <FavoriteButton movieId={data?.id} />
              <div
                onClick={handleOpen}
                className="
              cursor-pointer
              ml-auto
              w-6
              h-6
              group/item
              lg:w-10
              lg:h-10
              border-white
              border-2
              rounded-full
              flex
              justify-center
              items-center
              transition
              hover:border-neutral-300

              ">
                <BiChevronDown
                  size={30}
                  className="text-white group-hover/item:text-neutral-300"
                />
              </div>
            </div>
            <p className="text-green-400 font-semibold mt-2">
              New <span className="text-white">2023</span>
            </p>
            <div className="flex flex-row mt-2 gap-2 items-center">
              <p className="text-white text-[10px lg:text-sm]">
                {data.duration}
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 items-center">
              <p className="text-white text-[10px lg:text-sm]">{data.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
