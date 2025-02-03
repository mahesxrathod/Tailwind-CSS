import React from "react";

function Grid() {
  return (
    <>
       <div class="grid grid-cols-5 bg-slate-900 justify-evenly px-4 py-11 gap-5">
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">1</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">2</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">3</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">4</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">5</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">6</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl col-span-2">7</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">8</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">9</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl row-span-2">10</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl row-span-2">11</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl col-span-3">12</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl">13</div>
        <div class="bg-yellow-500 rounded-lg text-center py-12 text-3xl col-span-2">14</div>
    </div>
    </>
  );
}

export default Grid;
