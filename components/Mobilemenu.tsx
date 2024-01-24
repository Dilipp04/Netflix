import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const Mobilemenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="bg-black text-white flex-col border-2 border-gray-800  py-3 rounded-md w-56 absolute top-8 left-0 z-40">
        <div className="flex flex-col gap-4">
          <div className="px-3 text-center text-white hover:underline">
            Home
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Series
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Films
          </div>
          <div className="px-3 text-center text-white hover:underline">
            New & popular
          </div>
          <div className="px-3 text-center text-white hover:underline">
            My list
          </div>
          <div className="px-3 text-center text-white hover:underline">
            Browse by languages
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilemenu;
