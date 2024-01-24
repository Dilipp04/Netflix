import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

interface movieIdParams {
  movieId: string;
}

export async function GET(req: Request, { params }: { params: movieIdParams }) {
  try {
    const { movieId } = params;

    if (!movieId) {
      return new NextResponse("No Movie Provided");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movie) {
      return new NextResponse("Movie Not Found");
    }
    return NextResponse.json(movie);
  } catch (error) {
    return new NextResponse("Internal server Error", { status: 500 });
  }
}
