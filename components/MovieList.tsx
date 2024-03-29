import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <>
      <div className="px-4 md:px-12 mt-4 space-y-8">
        <div>
          <p className="text-white text-md  md:text-xl lg:text-2xl font-semibold mb-4">
            {title}
          </p>
          <div className="hidden sm:grid grid-cols-4 gap-2">
            {data.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
          <div className="flex h-[24vw] overflow-x-scroll overflow-y-hidden sm:hidden gap-2">
            <div className="flex space-x-2  ">
              {data.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
