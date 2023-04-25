import React from "react";

const GoalBar = (goal) => {
  console.log(goal);
  return (
    <div className="p-10">
        <h1 className="text-4xl text-center m-4">목표 진행율</h1>
      <div>
        <h2>주간 목표</h2>
        <p>목표 : 20 / 흡연 : 7</p>
        <div className="h-10 flex relative">
          <div className="w-1/3 h-full bg-yellow-500"></div>
          <div className="w-1/12 h-full bg-slate-50"></div>
          <div className="w-full bg-slate-200"></div>
          <div className="absolute end-0 h-full w-[calc(70%-50%)] bg-gray-700"></div>
        </div>
      </div>
      <div>
        <h2>월간 목표</h2>
        <p>목표 : 100 / 흡연 : 43</p>
        <div className="h-10 flex relative">
          <div className="w-1/3 h-full bg-yellow-500"></div>
          <div className="w-1/12 h-full bg-slate-50"></div>
          <div className="w-full bg-slate-200"></div>
          <div className="absolute end-0 h-full w-[calc(70%-50%)] bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default GoalBar;
