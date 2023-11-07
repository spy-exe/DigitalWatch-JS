const clockElement = document.getElementById('clock');
const darkModeToggle = document.getElementById('darkModeToggle');
const timezoneSelect = document.getElementById('timezone');

function updateClock() {
    let date = new Date();
    if (timezoneSelect.value) {
        let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        date = new Date(utc + (3600000*timezoneSelect.value));
    }
    clockElement.innerText = date.toLocaleTimeString();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}

darkModeToggle.addEventListener('click', toggleDarkMode);
timezoneSelect.addEventListener('change', updateClock);
setInterval(updateClock, 1000);