import React from "react";

function Marginpadding() {
  return (
    <>
      <div className="bg-[gold] p-10">
        <div class=" mx-auto bg-black p-6  shadow-md">
          <h1 class="text-2xl text-white font-bold text-center mb-6">
            Margin & Padding in Tailwind CSS
          </h1>

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
            <p class="text-gray-700">
              Experiment with different values by changing classes!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marginpadding;
