import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Exercise from "./Exercise";
import IndicatorBar from "./IndicatorBar";
import moritzImage from "url:../static/moritz_photo.jpeg";
import caroImage from "url:../static/caro_photo.jpeg";
import "./styles.css";

export default function App() {
  const [selectedUser, setSelectedUser] = useState();
  const [isSelectedJogging, setIsSelectedJogging] = useState(false);
  const [isSelectedWorkout, setIsSelectedWorkout] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(1);
  const [caroValues, setCaroValues] = useState([]);
  const [moritzValues, setMoritzValues] = useState([]);
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
              image={caroImage}
              isSelected={selectedUser === 0}
              onClick={() => {
                setSelectedUser(0);
              }}
            />
            <Avatar
              image={moritzImage}
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
              setSelectedUser();
              setIsSelectedJogging(false);
              setIsSelectedWorkout(false);
            }}
          >
            Add
          </button>
        </section>
      </div>
    </>
  );
}
