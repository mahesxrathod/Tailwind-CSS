import React from "react";

function Flexbox() {
  return (
    <>
      <div className="flex flex-row justify-evenly flex-wrap bg-black py-10">
        <div className="bg-[gold] w-40 text-center py-16 text-3xl m-6 order-3">
          H
        </div>
        <div className="bg-[gold] w-40 text-center py-16 text-3xl m-6 order-first">
          M
        </div>
        <div className="bg-[gold] w-40 text-center py-16 text-3xl m-6 order-4">
          E
        </div>
        <div className="bg-[gold] w-40 text-center py-16 text-3xl m-6 order-2">
          A
        </div>
        <div className="bg-[gold] w-40 text-center py-16 text-3xl m-6 order-5">
          S
        </div>
        <div className="bg-[gold] w-40 text-center py-16 text-3xl m-6 order-last">
          H
        </div>
      </div>
    </>
  );
}

export default Flexbox;
