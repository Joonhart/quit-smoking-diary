import React, { useState } from "react";
import Barchart from "../components/chart/BarChart";
import LongButton from "../components/ui/LongButton";
import TextCaroucel from "../components/ui/TextCaroucel";
import { useAuthContext } from "../context/AuthContext";
import AlertInfo from "../components/ui/AlertInfo";
import { addSmokeHistory } from "../api/firebase";

const Main = () => {
  const { user, uid } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);

  const showAlert = () => {
    setIsLogin(false);
    setTimeout(() => setIsLogin(true), 3000);
  };
  const smokeHandler = () => {
    !user && showAlert();
    user && addSmokeHistory(uid);
  };

  return (
    <>
      {!isLogin && <AlertInfo />}
      <section>
        <TextCaroucel />
      </section>
      <section className="p-4">
        <p className="mb-4 text-center text-2xl">
          마지막으로 담배를 피운지 17시간 32분이 지났습니다
        </p>
        <LongButton onClick={smokeHandler} text="담배 피우기" />
      </section>
      <section className="text-center grid grid-cols-1 lg:grid-cols-2 gap-2 gap-y-4">
        <section className="p-4">
          <p className="p-2">최근 일주일 흡연 횟수</p>
          <div className="h-96 bg-sky-400">
            일별 차트
            <Barchart uid={uid}/>
          </div>
        </section>
        <section className="p-4">
          <p className="p-2">금연 목표 현황</p>
          <div className="h-96 bg-sky-400">현황 차트</div>
        </section>
      </section>
    </>
  );
};

export default Main;
