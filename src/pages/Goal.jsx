import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { countEmoji } from "../utils/countEmoji";
import LongButton from "../components/ui/LongButton";

const Goal = () => {
  const [goal, setGoal] = useState({weekGoal: 0, monthGoal: 0});
  const [face, setFace] = useState('😃')
  const { user } = useAuthContext();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newGoal = {...goal, [name]: value}
    setGoal(newGoal);
    
    const count = Math.max(newGoal.weekGoal, parseInt(newGoal.monthGoal / 4));
    setFace(countEmoji(Number(count)))
  };
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      {!user && <p>목표를 거창하게 세우는 곳입니다</p>}
      {user && (
        <>
          <h1 className="m-4 text-center text-4xl">목표를 설정하세요! {face}</h1>
          <form className="flex flex-col m-4" onSubmit={submitHandler}>
            <div className="flex">
              <input
                type="text"
                className="text-center font-bold mr-2 text-lg"
                value="주간 흡연 횟수"
                readOnly
              />
              <input
                className="w-full"
                type="number"
                name="weekGoal"
                value={goal.weekGoal ?? ""}
                onChange={changeHandler}
                placeholder="주간 흡연 횟수"
                required
              />
            </div>
            <div className="flex">
              <input
                type="text"
                className="text-center font-bold mr-2 text-lg"
                value="월간 흡연 횟수"
                readOnly
              />
              <input
                className="w-full"
                type="number"
                name="monthGoal"
                value={goal.monthGoal ?? ""}
                onChange={changeHandler}
                placeholder="월간 흡연 횟수"
                required
              />
            </div>
            <LongButton text="목표 설정" onClick={submitHandler} />
          </form>

        </>
      )}
    </div>
  );
};

export default Goal;
