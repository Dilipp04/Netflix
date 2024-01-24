import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { without } from "lodash";
import serverAuth from "@/lib/serverAuth";

export async function POST(req: Request) {
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return NextResponse.json("user");
  } catch (error) {
    return new NextResponse("internal server Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }
    const UpdateFavoriteIds = without(currentUser.favoriteIds, movieId);

    const updateUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: UpdateFavoriteIds,
      },
    });
    return NextResponse.json(updateUser);
  } catch (error) {
    return new NextResponse("internal server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { currentUser } = await serverAuth();

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteMovies, { status: 200 });
  } catch (error) {
    return new NextResponse("internal server Error", { status: 500 });
  }
}
