let clr = "";

let timeElement = document.getElementById("time");
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

const logTime = () => {
    let curdate = new Date();

    let year = curdate.getFullYear();
    let month = curdate.getMonth();
    let date = curdate.getDate();
    let day = curdate.getDay();

    let hours = curdate.getHours();
    let minutes = curdate.getMinutes();
    let seconds = curdate.getSeconds();

    let dayName = "";
    switch (day) {
        case 0: dayName = "Sunday";
            break;
        case 1: dayName = "Monday";
            break;
        case 2: dayName = "Tuesday";
            break;
        case 3: dayName = "Wednesday";
            break;
        case 4: dayName = "Thursday";
            break;
        case 5: dayName = "Friday";
            break;
        case 6: dayName = "Saturday";
            break;
    }

    let monthName = "";
    switch (month) {
        case 0: monthName = "January";
            break;
        case 1: monthName = "February";
            break;
        case 2: monthName = "March";
            break;
        case 3: monthName = "April";
            break;
        case 4: monthName = "May";
            break;
        case 5: monthName = "June";
            break;
        case 6: monthName = "July";
            break;
        case 7: monthName = "August";
            break;
        case 8: monthName = "September";
            break;
        case 9: monthName = "October";
            break;
        case 10: monthName = "November";
            break;
        case 11: monthName = "December";
            break;
    }

    let timeString = `${hours}:${minutes}:${seconds}---${date} ${monthName},${year},${dayName}`;
    timeElement.innerText = timeString;
}
startButton.addEventListener('click', (e) => {
    clr = setInterval(logTime, 1000);
})
stopButton.addEventListener('click', (e) => {
    clearInterval(clr);
})