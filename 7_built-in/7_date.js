/** Date
 * UTC-based
 * Represents the time difference from 12:00 AM UTC on January 1, 1970, in milliseconds
 */
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now()); // Returns the number of milliseconds since January 1, 1970 (UTC)
console.log(Date.parse('2022-12-17T03:24:00')); //// Parses the given string and returns the time in milliseconds

const now = new Date();
now.setFullYear(2023);
now.setMonth(11); // 0-based month index, so 11 corresponds to December
console.log(now.getFullYear());
console.log(now.getDate()); // Get the day of the month (0-based)
console.log(now.getDay()); // Get the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
console.log(now.getTime());
console.log(now);

console.log(now.toString()); // Wed Dec 13 2023 15:03:07 GMT-0700 (미 산악 표준시)
console.log(now.toDateString()); // Wed Dec 13 2023
console.log(now.toTimeString()); // 15:03:07 GMT-0700 (미 산악 표준시)
console.log(now.toISOString()); // ISO8602 형식: 2023-12-13T22:05:31.260Z
console.log(now.toLocaleString('en-US')); // 12/13/2023, 3:05:59 PM
console.log(now.toLocaleString('ko-KR')); // 2023. 12. 13. 오후 3:06:18
