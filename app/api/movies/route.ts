import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const movies = await prismadb.movie.findMany();

    return NextResponse.json(movies);
  } catch (error) {
    return new NextResponse("Geting Movies Error", { status: 400 });
  }
}
