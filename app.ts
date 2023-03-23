import { dateDifference } from "./date-difference.ts";

const today = new Date();
const Birthday = new Date(2002, 21, 7);
const daysAliveInDays = dateDifference.getDifferenceInDays(
    today,
    Birthday
    );

const daysAliveInHours = dateDifference.getDifferenceInHours(
      today,
      Birthday
    );

const daysAliveInMinutes = dateDifference.getDifferenceInMinutes(
    today,
    Birthday
    );

const daysAliveInSeconds = dateDifference.getDifferenceInSeconds(
    today,
    Birthday
    );

console.log(`I have been alive for ${daysAliveInDays} days and ${daysAliveInHours} hours, ${daysAliveInMinutes} minutes, ${daysAliveInSeconds} seconds!!!`);   