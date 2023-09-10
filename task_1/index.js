const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTimeMillis = currentDate.getTime(); // Get UTC time in milliseconds

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDayOfWeek}`;
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (Milliseconds): ${currentUTCTimeMillis}`;