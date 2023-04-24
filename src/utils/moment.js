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

export async function getAllSmokeDummyData(uid) {
  console.log(uid);
  const totalData = [];

  if (!uid) {
    for (let i = 60; i >= 0; i--) {
      const date = moment().subtract(i, "days").format("YYYY-MM-DD").trim();
      totalData.push({
          'day': date, 'value': parseInt(Math.random()*10)
      })
    }
  } else {
    const allSmokeHistory = await getAllSmokeHistory(uid);
    Object.keys(allSmokeHistory).forEach(data => {
      totalData.push({'day': data, 'value': allSmokeHistory[data].length})
    })
  }

  const startDate = moment(totalData.map(data => data.day)[0]).subtract(1, 'days').format("YYYY-MM-DD");
  const endDate = totalData.map(data => data.day)[totalData.length-1]
  return {startDate, endDate, totalData};
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

export async function getLastSmokeTime(uid) {
  const userAllSmokeHistory = await getAllSmokeHistory(uid);
  const lastSmokeDay = Object.keys(userAllSmokeHistory).pop();
  const lastSmokeTime = userAllSmokeHistory[lastSmokeDay].pop();
  let howlong = moment(lastSmokeDay + ' ' + lastSmokeTime).fromNow().replace(' 전', '');
  return howlong === '하루' ? '하루가' : howlong + '이';
}