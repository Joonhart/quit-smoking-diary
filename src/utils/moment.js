import moment from "moment";
import "moment/locale/ko";
import { getAllSmokeHistory } from "../api/firebase";

export function getWeekSmokeDummyData() {
  const dummyData = [];
  for (let i = 6; i >= 0; i--) {
    const date = moment().subtract(i, "days").format("M/DD").trim();
    const dayOfTheWeek = '(' + moment().subtract(i, "days").format("dddd").replace('요일', '') + ')';
    dummyData.push({
        '날짜': date+dayOfTheWeek, '흡연': parseInt(Math.random()*10)
    })
  }
  return dummyData;
}

export async function getUserWeekSmokeData(uid) {
    const userWeekSmokeData = []
    const totalSmokeData = await getAllSmokeHistory(uid);

    for (let i = 6; i >= 0; i--) {
        const dbDate = moment().subtract(i, "days").format("YYYY-MM-DD");
        let date = moment().subtract(i, "days").format("M/DD");
        const dayOfTheWeek = '(' + moment().subtract(i, "days").format("dddd").replace('요일', '') + ')';
        userWeekSmokeData.push({
            '날짜': date+dayOfTheWeek, '흡연':totalSmokeData[dbDate] ? totalSmokeData[dbDate].length : 0
        })
      }
      return userWeekSmokeData
}