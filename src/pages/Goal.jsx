import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { countEmoji } from "../utils/countEmoji";
import LongButton from "../components/ui/LongButton";
import { getAllSmokeHistory, getUserGoal, insertOrUpdateGoal } from "../api/firebase";
import GoalBar from "../components/GoalBar";
import AlertInfo from "../components/ui/AlertInfo";

const Goal = () => {
  const [goal, setGoal] = useState({weekGoal: 0, monthGoal: 0});
  const [goalTxt, setGoalTxt] = useState('설정')
  // const [goalExist, setGoalExist] = useState(false)
  const [smokeHistory, setSmokeHistory] = useState({})
  const [face, setFace] = useState('😃')
  const { uid } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true)

  const showProgress = async (uid) => {
    const userSmokeHistory = await getAllSmokeHistory(uid);
    setSmokeHistory(userSmokeHistory);
    setGoalTxt('수정')
  }
  const showAlert = () => {
    setIsLogin(false);
    setTimeout(() => setIsLogin(true), 3000);
  };

  useEffect(() => {
    async function showUserGoal() {
      const userGoal = await getUserGoal(uid)
      userGoal && setGoal(userGoal);
      userGoal && showProgress(uid);
    }
    uid && showUserGoal(uid);
  }, [uid])

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newGoal = {...goal, [name]: value}
    setGoal(newGoal);
    
    const count = Math.max(newGoal.weekGoal, parseInt(newGoal.monthGoal / 4));
    setFace(countEmoji(Number(count)))
  };
  const submitHandler = (e) => {
    e.preventDefault();
    !uid && showAlert();
    uid && insertOrUpdateGoal(uid, goal);
  }

  return (
    <div>
      {/* {!uid && <p>목표를 거창하게 세우는 곳입니다</p>} */}
      {/* {uid && ( */}
        <>
            {goal && <GoalBar goal={goal} smokeHistory={smokeHistory}/>}
            {!goal && <GoalBar goal={goal}/>}
          <h1 className="m-4 text-center text-4xl">{`목표를 ${goalTxt}하세요! ${face}`}</h1>
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
            <div className="flex mb-4">
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
            {!isLogin && <AlertInfo text="로그인 후 사용 가능합니다." />}
            <LongButton text={`목표 ${goalTxt}`} onClick={submitHandler} />
          </form>

        </>
      {/* )} */}
    </div>
  );
};

export default Goal;
