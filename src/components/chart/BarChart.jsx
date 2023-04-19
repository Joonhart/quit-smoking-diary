import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const Barchart = () => {
  const handle = {};

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: "100%", height: "90%", margin: "0 auto" }}>
      <ResponsiveBar
        /**
         * chart에 사용될 데이터
         */
        data={[
          { 날짜: "4/12(월)", 흡연: 4 },
          { 날짜: "4/13(화)", 흡연: 7 },
          { 날짜: "4/14(수)", 흡연: 3 },
          { 날짜: "4/15(목)", 흡연: 5 },
          { 날짜: "4/16(금)", 흡연: 5 },
          { 날짜: "4/17(토)", 흡연: 2 },
          { 날짜: "4/18(일)", 흡연: 3 },
        ]}
        keys={["흡연"]}
        indexBy="날짜"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.5}
        colors={["orange"]}
        colorBy="id"
        theme={{
          axis: {
            
            ticks: {
              text: {
                fontSize: 16,
                fill: "#000000",
              },
            },
          },
        }}
        axisLeft={{
            tickSize: 1,
            tickPadding: 2,
            legendPosition: 'middle',
            tickValues: 7,
        }}
        enableGridY={false}
        labelSkipWidth={36}
        labelSkipHeight={12}
        onClick={handle.barClick}
      />
    </div>
  );
};

export default Barchart;
