import { ResponsiveTimeRange } from "@nivo/calendar";
import React from "react";
import { getAllSmokeDummyData } from "../../utils/moment";
import { useState, useEffect } from "react";

const TimeRangeChart = ({uid}) => {
  const [allSmokeData, setAllSmokeData] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  

  useEffect(() => {
    async function fetchAllSmokeData() {
      const {startDate, endDate, totalData} = await getAllSmokeDummyData(uid);
      setAllSmokeData(totalData);
      setFrom(startDate)
      setTo(endDate)
    }
    fetchAllSmokeData();
  }, [uid])
  
  if(!allSmokeData) return (<p>loading...</p>)
  return (
    <div style={{ width: "100%", height: "90%", margin: "0 auto" }}>
      <ResponsiveTimeRange
        data={allSmokeData}
        from={from}
        to={to}
        emptyColor="#eeeeee"
        colors={["#f5f7f7", "#e8d2cc", "#f47560", "#4f2716"]}
        margin={{ top: 40, right:40, bottom: 100, left: 40 }}
        yearSpacing={40}
        dayBorderWidth={2}
        monthBorderColor="#ffffff"
        dayBorderColor="#ffffff"
        weekdayTicks={[0, 1, 2, 3, 4, 5, 6]}
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            justify: false,
            itemCount: 10,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
            translateX: -60,
            translateY: -60,
            symbolSize: 20,
          },
        ]}
      />
    </div>
  );
};

export default TimeRangeChart;
