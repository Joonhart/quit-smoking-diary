import { ResponsiveTimeRange } from "@nivo/calendar";
import React from "react";
import { statData } from "./statData";

const TimeRangeChart = () => {
  console.log(statData);

  return (
    <div style={{ width: "100%", height: "90%", margin: "0 auto" }}>
      <ResponsiveTimeRange
        data={statData}
        from="2023-01-24"
        to="2023-04-15"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
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
            itemCount: 4,
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
