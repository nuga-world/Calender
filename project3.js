const month = document.getElementById('month')
const week = document.getElementById('week')
// const time = document.getElementById('time')
const day = document.getElementById('day')
const year = document.getElementById('year')

new Date()

let data = new Date()



// console.log(data);
// console.log(data.getMinutes());
// console.log(data.getDay());
// console.log(data.getFullYear());
// console.log(data.getMonth());
// console.log(data.getDate());
// console.log(data.getSeconds());
// console.log(data.getTime());
// console.log(data.getHours());


function timeUntilMidnight() {
    let timeNow = new Date();
    console.log(`This is the time now ${timeNow}`);

    let midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    console.log(`This is the midnight value, ${midnight}`);
    
    let timeDifference = midnight - timeNow;
    console.log(timeDifference);

    //CONVERT THE TIME DIFFENCE TO HOURS, MINUTES AND SECONDS.

    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    // console.log(hours);
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(minutes);
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    // console.log(seconds);


    //FORMAT THE HOURS, MINUTES AND SECONDS TO ALWAYS HAVE TWO DIGITS

    hours = hours < 10 ? "0" + hours : hours;  //ANOTHER WAY OF WRITTING THE CONDITION STATEMENT (ie. IF STATEMENT: If hours is less than 10 (? means if the statement is true), add "0" as string to it otherwise(:) give me the hours)
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;

    let display = document.getElementById("time");
    display.textContent = hours + ":" + minutes + ':' + seconds;

    //UPDATE THE TIMER EVERY SECOND
    setTimeout(timeUntilMidnight, 1000);
}

window.onload = function () {
    timeUntilMidnight()
}


month.innerText = data.toLocaleString('EN',{month:'long'});
week.innerText = data.toLocaleString('EN', {weekday:'long'});
// time.innerText = data.toLocaleTimeString();
day.innerText = data.getDate();
year.innerText = data.getFullYear();
