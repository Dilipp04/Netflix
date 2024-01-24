import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser();
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="bg-black text-white flex-col border-2 border-gray-800  py-5 rounded-md w-56 absolute top-14 right-0 z-40">
        <div className="flex flex-col gap-3">
          <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
            <img
              className="w-8 rounded-md "
              src="/images/default-blue.png"
              alt="Profile"
            />
            <p className="text-white text-sm group-hover/item:underline">
              {data?.name}
            </p>
          </div>
          <hr className="bg-gray-600 border-0 h-px my-4" />
          <div
            onClick={() => signOut()}
            className="px-3 text-center text-sm text-white hover:underline">
            Sign out
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountMenu;
