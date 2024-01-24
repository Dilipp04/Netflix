"use client";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const profiles = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "unauthenticated") router.push("/auth");
  }, [session?.status]);

  const { data: user } = useCurrentUser();

  return (
    <>
      <div className="flex items-center h-full  justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-6xl text-white text-center">
            Who is watching
          </h1>
          <div className="flex items-center justify-center gap-8 mt-10">
            <div onClick={() => router.push("/")}>
              <div className="group flex-row w-44 mx-auto">
                <div className="h-44 w-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                  <img src="/images/default-blue.png" alt="" />
                </div>
                <div className="mt-4 text-2xl text-gray-400 text-center group-hover:text-white">
                  {user?.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profiles;
