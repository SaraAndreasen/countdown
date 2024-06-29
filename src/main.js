let dateTime = luxon.DateTime;
let now = dateTime.now();
let concertDate = dateTime.local(2024, 11, 25);
let interval = luxon.Interval.fromDateTimes(now, concertDate);

console.log(interval.length("days"));

let dateElement = document.querySelector("#date-of-concert");
dateElement.innerHTML = `${concertDate.toLocaleString()}`;
