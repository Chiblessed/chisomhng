

function getUtcTime() {
    const getTime = document.querySelector('[data-testId="currentTimeUTC"]');
 const now = new Date();
 const utcTime = now.toUTCString().split(' ')[4]
 getTime.textContent = utcTime
}

getUtcTime()
setInterval(getUtcTime, 1000)