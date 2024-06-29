let dateTime = luxon.DateTime;
let concertDate = dateTime.local(2024, 11, 25, 18, 30);

let dateElement = document.querySelector("#date-of-concert");
dateElement.innerHTML = `${concertDate.toFormat("DDD")}`;

function updateCountdown() {
  let now = dateTime.now();
  let interval = luxon.Interval.fromDateTimes(now, concertDate);
  let duration = interval.toDuration(["days", "hours", "minutes", "seconds"]);
  let countdownElement = document.querySelector("#time");
  let daysUntilElement = document.querySelector("#days");

  daysUntilElement.innerHTML = `<strong>${Math.floor(
    interval.length("days")
  )} days</strong>`;
  countdownElement.innerHTML = `<strong>${
    duration.toObject().hours
  }</strong> <small>hours,</small> <strong>${
    duration.toObject().minutes
  }</strong><small> minutes and</small> <strong>${Math.floor(
    duration.toObject().seconds
  )}</strong> <small>seconds left</small>`;
}
updateCountdown();
setInterval(updateCountdown, 1000);
