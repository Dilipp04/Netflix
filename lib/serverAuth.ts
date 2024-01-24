import { NextResponse } from "next/server";
import { authOptions } from "@/app/actions/action";
import { getServerSession } from "next-auth";

import prismadb from "@/lib/prismadb";

const serverAuth = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("Not signed In");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!currentUser) {
    throw new Error("Not signed In");
  }

  return { currentUser };
};

export default serverAuth;
