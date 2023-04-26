import { getSmokeInfo } from "../utils/moment";
import { percentMap } from "../utils/barPercent";

const GoalBar = ({ goal = {}, smokeHistory = {} }) => {
  const { weekGoal, monthGoal } = goal;
  const { weekSmoke, monthSmoke } = getSmokeInfo(smokeHistory);
  const weekPercent = percentMap[parseInt(weekSmoke / weekGoal * 70)];
  const monthPercent = percentMap[parseInt(monthSmoke / monthGoal * 70)];
  const weekBarColor = parseInt(weekSmoke / weekGoal * 70) >= 60 ? 'bg-red-700' : 'bg-gray-700';
  const monthBarColor = parseInt(monthSmoke / monthGoal * 70) >= 60 ? 'bg-red-700' : 'bg-gray-700';

  const weekClass = `absolute end-0 h-full ${weekPercent} ${weekBarColor}`
  const monthClass = `absolute end-0 h-full ${monthPercent} ${monthBarColor}`

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
          <div className={weekClass} ></div>
        </div>
      </div>
      <div>
        <h2>월간 목표</h2>
        <p>목표 : {monthGoal} / 흡연 : {monthSmoke}</p>
        <div className="h-10 flex relative">
          <div className="w-1/3 h-full bg-yellow-500"></div>
          <div className="w-1/12 h-full bg-slate-50"></div>
          <div className="w-full bg-slate-200"></div>
          <div className={monthClass}></div>
        </div>
      </div>
    </div>
  );
};

export default GoalBar;
