import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white py-1 md:py-2 w-auto font-semibold text-xs lg:text-lg px-2 md:px-4 rounded-md gap-1 text-black hover:bg-neutral-200 flex justify-center items-center transition">
      <BsFillPlayFill size={30} />
      Play
    </button>
  );
};

export default PlayButton;
