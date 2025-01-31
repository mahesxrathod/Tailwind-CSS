import React from "react";

function Marginpadding() {
  return (
    <>
      {/* <p className="font-bold font-sans text-2xl text-center my-3">Margin-Padding</p>
      <div className=" bg-black py-10">

      <h1 class="bg-[gold] font-bold text-3xl p-px m-px">Virat</h1>

      <h1 class="bg-[gold] p-[100px] font-bold font-sans text-2xl my-5">Virat</h1>
      <span class="bg-[gold] p-10 bg-[gold]block">using span tag</span>

      <div class="bg-[gold] text-black mb-5 mt-10 ml-8 mr-24">
        <h1>Code Step by Step</h1>
      </div>

      <div class="bg-[gold] pt-5 pb-20 pl-24 pr-24">
        <h1>Code Step by Step</h1>
      </div>

      <div class="bg-[gold] my-4 py-10">
        <h1>Code Step by Step</h1>
      </div>

      <div class="bg-[gold] mx-4 px-10">
        <h1>Code Step by Step</h1>
      </div>

      <div class="bg-[gold]m-4 p-4">
        <h1>Code Step by Step</h1>
      </div>
      </div> */}
      <div className="bg-[gold] p-10">
      <div class=" mx-auto bg-black p-6  shadow-md">
        <h1 class="text-2xl text-white font-bold text-center mb-6">Margin & Padding in Tailwind CSS</h1>
        
        <div class="bg-blue-200 p-4 mb-4">Padding: p-4</div>
        <div class="bg-green-200 p-8 mb-4">Padding: p-8</div>
        <div class="bg-yellow-200 p-12 mb-4">Padding: p-12</div>
        
        <div class="bg-red-200 m-4 p-4">Margin: m-4</div>
        <div class="bg-purple-200 m-8 p-4">Margin: m-8</div>
        <div class="bg-pink-200 m-12 p-4">Margin: m-12</div>
        
        <div class="bg-gray-300 mt-4 p-4">Margin Top: mt-4</div>
        <div class="bg-gray-400 mb-4 p-4">Margin Bottom: mb-4</div>
        <div class="bg-gray-500 ml-4 p-4">Margin Left: ml-4</div>
        <div class="bg-gray-600 mr-4 p-4">Margin Right: mr-4</div>
        
        <div class="text-center mt-6">
            <p class="text-gray-700">Experiment with different values by changing classes!</p>
        </div>
    </div>
      </div>
    </>
  );
}

export default Marginpadding;
