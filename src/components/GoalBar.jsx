import React, { useEffect, useState } from "react";
import { getSmokeInfo } from "../utils/moment";
import GaugeBar from "./ui/GaugeBar";

const GoalBar = ({ goal = {}, smokeHistory = {} }) => {
  const [weekClassName, setWeekClassName] = useState();
  const [monthClassName, setMonthClassName] = useState();
  const { weekGoal, monthGoal } = goal;
  const { weekSmoke, monthSmoke } = getSmokeInfo(smokeHistory);

  useEffect(() => {
    const weekPercent = parseInt(weekSmoke / weekGoal * 70);
    const monthPercent = parseInt(monthSmoke / monthGoal * 70);
    const weekBarColor = weekPercent >= 60 ? 'bg-red-400' : 'bg-red-700';
    const monthBarColor = monthPercent >= 60 ? 'bg-red-400' : 'bg-gray-700';
    weekPercent && setWeekClassName(() => `absolute end-0 h-full w-[${weekPercent}%] ${weekBarColor}`);
    monthPercent && setMonthClassName(() => `absolute end-0 h-full w-[${monthPercent}%] ${monthBarColor}`)
    console.log(weekClassName);
    console.log(monthClassName);
  }, [goal, smokeHistory])

  return (
    <div className="p-10">
      <h1 className="text-4xl text-center m-4">목표 진행율</h1>
      <div>
        <h2>주간 목표</h2>
        <p>목표 : {weekGoal} / 흡연 : {weekSmoke}</p>
        <div className="h-10 flex relative">
          <div className="w-1/3 h-full bg-yellow-500"></div>
          <div className="w-1/12 h-full bg-slate-50"></div>
          <div className="w-full bg-slate-200"></div>
          <GaugeBar className={weekClassName}></GaugeBar>
        </div>
      </div>
      <div>
        <h2>월간 목표</h2>
        <p>목표 : {monthGoal} / 흡연 : {monthSmoke}</p>
        <div className="h-10 flex relative">
          <div className="w-1/3 h-full bg-yellow-500"></div>
          <div className="w-1/12 h-full bg-slate-50"></div>
          <div className="w-full bg-slate-200"></div>
          {monthClassName && <div className={monthClassName}></div>}
        </div>
      </div>
    </div>
  );
};

export default GoalBar;
