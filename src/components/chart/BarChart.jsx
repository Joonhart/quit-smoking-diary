import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";
import { getUserWeekSmokeData, getWeekSmokeDummyData } from "../../utils/moment";

const Barchart = ({uid, smoke}) => {
  const [weekSmokeData, setWeekSmokeData] = useState()
  const [axisLeft, setAxisLeft] = useState();

  useEffect(() => {
    async function fetchWeekSmokeData() {
      const userWeekSmokeData = uid ? await getUserWeekSmokeData(uid) : getWeekSmokeDummyData()
      setWeekSmokeData(userWeekSmokeData)
      setAxisLeft({
        tickSize: 1,
        tickPadding: 2,
        legendPosition: 'middle',
        tickValues: Math.max(...userWeekSmokeData.map(data => data.흡연)),
    })
    }
    fetchWeekSmokeData();
  }, [uid, smoke])

  if(!weekSmokeData) return (<p>loading...</p>)
  
  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: "100%", height: "90%", margin: "0 auto" }}>
      <ResponsiveBar
        /**
         * chart에 사용될 데이터
         */
        data={weekSmokeData}
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
                fontSize: 9,
                fill: "#000000",
              },
            },
          },
        }}
        axisLeft={axisLeft}
        enableGridY={false}
        labelSkipWidth={36}
        labelSkipHeight={12}
      />
    </div>
  );
};

export default Barchart;
