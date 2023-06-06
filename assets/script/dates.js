import { zonedTimeToUtc } from 'date-fns-tz'
import {format} from 'date-fns'

const date = new Date();
const hour = "08:30";
console.log("Date", date);
const splitTimeBase = hour.split(":");
const timehour = splitTimeBase[0];
const timeMinutes = splitTimeBase[1];
const newDate = new Date();
newDate.setHours(timehour);
newDate.setMinutes(timeMinutes);
newDate.setSeconds(0);
console.log("newDate", newDate.toISOString())
console.log("zoned", zonedTimeToUtc(newDate, 'UTC').toISOString())
/*
console.log("converted Date")
const timezone = 'Africa/Asmara' //+3
const originalDate = date.toLocaleString([])
const timezoneDate = date.toLocaleString([], { timeZone: timezone })
const utcDate = date.toLocaleString([], { timeZone: 'UTC' })

console.log("Original Date to Locale", originalDate)
console.log("Timezone Date to Locale", timezoneDate)
console.log("utcDate to Locale", utcDate)

console.log("Back to date")
console.log("Original Date to Date",new Date(timezoneDate))
console.log("Timezone Date to Date",new Date(timezoneDate))
console.log("utcDate Date to Date",new Date(utcDate))

console.log("ToIsoString")
console.log("Original Date to isoString",new Date(timezoneDate).toISOString())
console.log("Timezone Date to isoString",new Date(timezoneDate).toISOString())
console.log("utcDate Date to isoString",new Date(utcDate).toISOString())
console.log("Date To ISOString", date.toISOString())
console.log("Set hour to date")
const splitTime = hour.split(':')
const date2 = new Date()
date2.setHours(splitTime[0])
date2.setMinutes(splitTime[1])
date2.setSeconds(0)
console.log("New date 2", date2)
console.log("Date2 To ISOString", date2.toISOString())

var today = new Date('05 October 2011 14:48 UTC');
console.log(today.toISOString());
const splitTimeBase = hour.split(":");
const timehour = splitTimeBase[0];
const timeMinutes = splitTimeBase[1];
const day = date.getUTCDate();
console.log("day: ", day);
const month = date.getUTCMonth();
console.log("month: ", month);
const year = date.getUTCFullYear();
console.log("Year: ", year);
const fechaGmt = new Date(
  Date.UTC(year, month, day, timehour, timeMinutes, 0)
).toISOString();
console.log(fechaGmt);

const createUTCDate = (date, startTime) => {
  const splitTime = startTime.split(":");
  const hour = Number(splitTime[0]);
  const minutes = Number(splitTime[1]);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  const dateUTC = Date.UTC(year, month, day, hour, minutes, 0);
  return new Date(dateUTC).toISOString();
};
*/