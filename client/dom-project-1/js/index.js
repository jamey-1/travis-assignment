const finalTime = new Date("Aug 15, 2020 00:00:00").getTime();

const daysDOM = document.getElementById("days");
const hoursDOM = document.getElementById("hours");
const minutesDOM = document.getElementById("minutes");
const secondsDOM = document.getElementById("seconds");

const countTime = () => {
  const currentTime = new Date().getTime();
  const remainingTime = finalTime - currentTime;
  //   console.log(remainingTime);

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    //   console.log("days", days);
    daysDOM.textContent = days;
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    //   console.log("hours", hours);
    hoursDOM.textContent = hours;
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    //   console.log("minutes", minutes);
    minutesDOM.textContent = minutes;
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    //   console.log("seconds", seconds);
    secondsDOM.textContent = seconds;
  } else {
    document.getElementById("timerInfo").textContent = "The conference was over";
  }
};

let nIntervId = setInterval(countTime, 1000);

document.getElementById("countTimer").addEventListener("click", () => {
  clearInterval(nIntervId);
});
