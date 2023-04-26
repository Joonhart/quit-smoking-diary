import React, { useEffect, useState } from "react";
import Barchart from "../components/chart/BarChart";
import LongButton from "../components/ui/LongButton";
import TextCaroucel from "../components/ui/TextCaroucel";
import { useAuthContext } from "../context/AuthContext";
import AlertInfo from "../components/ui/AlertInfo";
import { addSmokeHistory } from "../api/firebase";
import { getLastSmokeTime } from "../utils/moment";

const Main = () => {
  const { uid } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [smoke, setSmoke] = useState(true);
  const [smoking, setSmoking] = useState(false);
  const [lastSmoke, setLastSmoke] = useState("");

  useEffect(() => {
    async function getSmokeTime() {
      const lastSmokeTime = uid ? await getLastSmokeTime(uid) : "2시간 20분";
      setLastSmoke(lastSmokeTime);
    }
    getSmokeTime();
  }, [uid, smoke, smoking]);

  const showAlert = () => {
    setIsLogin(false);
    setTimeout(() => setIsLogin(true), 3000);
  };
  const smokeHandler = async () => {
    !uid && showAlert();
    uid && (await addSmokeHistory(uid));
    uid && setSmoke((smoke) => !smoke);
    uid && setSmoking(true);
    uid && setTimeout(() => {
      setSmoking(false);
    }, 60000);
  };

  return (
    <>
      
      <section>
        <TextCaroucel />
      </section>
      <section className="p-4">
        {!smoking && (
          <p className="mb-4 text-center text-2xl">
            마지막으로 담배를 피운지 {lastSmoke} 지났습니다
          </p>
        )}
        {!isLogin && <AlertInfo text="로그인 후 사용 가능합니다." />}
        {!smoking && <LongButton onClick={smokeHandler} text="담배 피우기" />}
        {smoking && (
          <div className="bg-gray-400 text-center leading-loose text-white h-20 w-full text-4xl animate-infinite animate-pulse">
            니코틴을 충전합니다...
          </div>
        )}
        
      </section>
      <section className="text-center grid grid-cols-1 lg:grid-cols-1 gap-2 gap-y-4">
        <section className="p-4">
          <p className="p-2 text-2xl">최근 일주일 흡연 횟수</p>
          <div className="h-96 bg-sky-400">
            <Barchart uid={uid} smoke={smoke} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Main;
