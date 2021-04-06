import React from "react";

export default function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="flex-auto text-xl font-semibold my-6">Sport Tracker</h1>
        <section>
          <div className="font-semibold">
            <h2 className="flex-auto text-lg my-3">Caro</h2>
            <div className="flex h-12 mb-6">
              <div
                style={{ flex: 1 }}
                className="flex items-center justify-center bg-green-200 rounded-l-md"
              >
                1
              </div>
              <div
                style={{ flex: 2 }}
                className="flex items-center justify-center bg-green-400"
              >
                2
              </div>
              <div
                style={{ flex: 5 }}
                className="flex items-center justify-center bg-green-700"
              >
                5
              </div>
              <div
                style={{ flex: 1 }}
                className="flex items-center justify-center bg-green-400 rounded-r-md"
              >
                1
              </div>
            </div>
          </div>

          <div className="font-semibold">
            <h2 className="flex-auto text-lg my-3">Moritz</h2>
            <div className="flex h-12 mb-10">
              <div
                style={{ flex: 1 }}
                className="flex items-center justify-center bg-green-200 rounded-l-md"
              >
                1
              </div>
              <div
                style={{ flex: 2 }}
                className="flex items-center justify-center bg-green-400"
              >
                1
              </div>
              <div
                style={{ flex: 3 }}
                className="flex items-center justify-center bg-green-700"
              >
                3
              </div>
              <div
                style={{ flex: 4 }}
                className="flex items-center justify-center bg-green-400 rounded-r-md"
              >
                4
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-between my-3">
          <div className="flex">
            <img
              src="http://picsum.photos/200?random=1"
              className="rounded-full w-20 h-20 shadow-xl cursor-pointer"
            />
            <img
              src="http://picsum.photos/200?random=2"
              className="rounded-full w-20 h-20 shadow-xl mx-2 border-4 border-green-400 cursor-pointer"
            />
          </div>
          <div className="flex">
            <div className="bg-gray-300 p-6 flex items-center rounded-md shadow-xl cursor-pointer">
              Workout
            </div>
            <div className="bg-gray-300 p-6 flex items-center rounded-md shadow-xl mx-2 border-4 border-green-400 cursor-pointer">
              Joggen
            </div>
          </div>
          <button
            className="bg-green-700 p-6 px-14 flex items-center rounded-md shadow-xl text-white font-semibold"
            type="button"
          >
            Add
          </button>
        </section>
      </div>
    </>
  );
}
