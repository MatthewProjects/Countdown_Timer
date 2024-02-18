const currentDate = new Date();
console.log(currentDate); // This logs the current date and time to the console

const targetDate = new Date('2024-12-31T23:59:59'); // Replace with target
console.log(targetDate); // Check the target date in the console

const difference = targetDate - currentDate;
console.log(difference); // This will log the difference in milliseconds


function updateCountdown(currentTime) {
  const difference = targetDate - currentTime;

  if (difference <= 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update HTML elements with countdown values
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Initial call to start the countdown
updateCountdown(new Date());

const interval = setInterval(() => {
  updateCountdown(new Date());
}, 1000);

// Check for difference < 0 and stop the countdown if needed
if (difference < 0) {
  clearInterval(interval);
  document.getElementById("timer").innerText = "The event has started!";
}
