import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Exercise from "./Exercise";
import IndicatorBar from "./IndicatorBar";

export default function App() {
  const [selectedUser, setSelectedUser] = useState();
  const [isSelectedJogging, setIsSelectedJogging] = useState(false);
  const [isSelectedWorkout, setIsSelectedWorkout] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(1);
  const [caroValues, setCaroValues] = useState([1, 1, 1, 2, 3, 2]);
  const [moritzValues, setMoritzValues] = useState([1, 2, 3, 1]);
  useEffect(() => {
    if (isSelectedJogging && isSelectedWorkout) {
      setSelectedActivity(3);
    } else if (isSelectedJogging || isSelectedWorkout) {
      setSelectedActivity(2);
    } else {
      setSelectedActivity(1);
    }
  }, [isSelectedJogging, isSelectedWorkout]);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="flex-auto text-xl font-semibold my-6">Sport Tracker</h1>
        <section>
          <div className="font-semibold">
            <h2 className="flex-auto text-lg my-3">Caro</h2>
            <IndicatorBar id="caro" values={caroValues} />
          </div>

          <div className="font-semibold">
            <h2 className="flex-auto text-lg my-3">Moritz</h2>
            <IndicatorBar id="moritz" values={moritzValues} />
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
            onClick={() => {
              if (selectedUser === 0) {
                setCaroValues([...caroValues, selectedActivity]);
              } else if (selectedUser === 1) {
                setMoritzValues([...moritzValues, selectedActivity]);
              }
            }}
          >
            Add
          </button>
        </section>
      </div>
    </>
  );
}
