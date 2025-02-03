import React from 'react'

function Border() {
  return (
    <>
    <div className='flex flex-col justify-between content-between'>
        <div className='w-[80%] mx-auto bg-gradient-to-r from-indigo-500 to-rose-500 rounded text-center text-white font-bold text-2xl p-5 mb-3 mt-3'>border rounded</div>
        <div className='w-[80%] mx-auto bg-gradient-to-r from-indigo-500 to-rose-500 rounded-xl text-center text-white font-bold text-2xl p-5 mb-3 mt-3'>border rounded in xl</div>
        <div className='w-[80%] mx-auto border border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>border</div>
        <div className='w-[80%] mx-auto border-2 border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>border-width</div>
        <div className='w-[80%] mx-auto border-2 border-solid border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>border-dashed</div>
        <div className='w-[80%] mx-auto border-2 border-dashed border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>border-dashed</div>
        <div className='w-[80%] mx-auto border-2 border-dotted border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>border-dotted</div>
        <div className='w-[80%] mx-auto border-2 border-double border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>border-dotted</div>
        <div className='w-[80%] mx-auto outline-4 outline-offset-2 bg-[gold] border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>Outline Border</div>
        <div className='w-[80%] mx-auto outline-4 outline-offset-2 outline-dashed bg-[gold] border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>Outline dashed</div>
        <div className='w-[80%] mx-auto outline-0 outline-offset-2 bg-[gold] border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>Outline-0 offset</div>
        <div className='w-[80%] mx-auto outline-4 outline-offset-2 bg-[gold] border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>Outline-4 offset</div>
        <div className='w-[80%] mx-auto outline-8 outline-offset-2 bg-[gold] border-indigo-600  text-center text-red font-bold text-2xl p-5 mb-3 mt-3'>Outline-8 offset</div>
    </div>
    </>
  )
}

export default Border