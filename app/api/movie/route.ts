import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const moviesCount = await prismadb.movie.count();
    //random() :- any floaint point number between 0<n and 1>n
    const randomIndex = Math.floor(Math.random() * moviesCount);
    const movies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return NextResponse.json(movies[0]);
  } catch (error) {
    return new NextResponse("Geting Movies Error", { status: 400 });
  }
}
