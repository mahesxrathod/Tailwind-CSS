import React from "react";

const Alignment = () => {
  return (
    <div>
      <p class="font-bold font-sans text-2xl text-center py-2">
        justify-content: flex-start
      </p>
      <div class="flex flex-row justify-start flex-wrap bg-black py-10">
        <div class="bg-[gold] w-40 text-center py-10 text-3xl">M</div>
        <div class="bg-[gold] w-40 text-center py-10 text-3xl">A</div>
        <div class="bg-[gold] w-40 text-center py-10 text-3xl">H</div>
        <div class="bg-[gold] w-40 text-center py-10 text-3xl">E</div>
        <div class="bg-[gold] w-40 text-center py-10 text-3xl">S</div>
        <div class="bg-[gold] w-40 text-center py-10 text-3xl">H</div>
      </div>
    </div>
  );
};

export default Alignment;
