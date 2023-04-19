import React from "react";
import SmokeButton from "../components/ui/SmokeButton";
import Barchart from "../components/ui/BarChart";

const Main = () => {
  const plusSmoke = () => {
    // 담배 피운 리스트 가져와서 현재 시간 추가
    console.log("후.... 인생");
  };

  return (
    <>
      <section className="p-4">
        <p className="mb-4 text-center text-2xl">
          마지막으로 담배를 피운지 17시간 32분이 지났습니다
        </p>
        <SmokeButton onClick={plusSmoke} text="담배 피우기" />
      </section>
      <section className="text-center grid grid-cols-1 lg:grid-cols-2 gap-2 gap-y-4">
        <section className="p-4">
            <p className="p-2">최근 일주일 흡연 횟수</p>
            <div className="h-96 bg-sky-400">
                일별 차트
                <Barchart />
            </div>
        </section>
        <section className="p-4">
            <p className="p-2">금연 목표 현황</p>
            <div className="h-96 bg-sky-400">
                현황 차트
            </div>
        </section>
      </section>
    </>
  );
};

export default Main;
