import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Exercise from "./Exercise";
import IndicatorBar from "./IndicatorBar";

export default function App() {
  const [selectedUser, setSelectedUser] = useState();
  const [isSelectedJogging, setIsSelectedJogging] = useState(false);
  const [isSelectedWorkout, setIsSelectedWorkout] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="flex-auto text-xl font-semibold my-6">Sport Tracker</h1>
        <section>
          <div className="font-semibold">
            <h2 className="flex-auto text-lg my-3">Caro</h2>
            <IndicatorBar values={[1, 0, 3, 2, 1, 2, 3, 0, 0, 1]} length={12} />
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
            <Avatar
              image="http://picsum.photos/200?random=1"
              isSelected={selectedUser === 0}
              onClick={() => {
                setSelectedUser(0);
              }}
            />
            <Avatar
              image="http://picsum.photos/200?random=2"
              isSelected={selectedUser === 1}
              onClick={() => {
                setSelectedUser(1);
              }}
            />
          </div>
          <div className="flex">
            <Exercise
              isSelected={isSelectedJogging}
              onClick={() => {
                setIsSelectedJogging(!isSelectedJogging);
              }}
              text="Joggen"
            />
            <Exercise
              isSelected={isSelectedWorkout}
              onClick={() => {
                setIsSelectedWorkout(!isSelectedWorkout);
              }}
              text="Workout"
            />
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
