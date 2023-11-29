const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#year")
const dayNames = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"]

// select hours
const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#Seconds")
const amPm = document.querySelector("#amPm")

const montName = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];


const clock = () => {

const dateTime = new Date();
month.innerHTML = montName[dateTime.getMonth()];
day.innerHTML = dateTime.getDate();
year.innerHTML = dateTime.getFullYear()

    
if (dateTime.getHours() < 10) {
    hour.innerHTML = `0${dateTime.getHours()}:`

}else{
    hour.innerHTML = dateTime.getHours()+ ":"
}
if (dateTime.getMinutes() < 10) {
    minutes.innerHTML = `0${dateTime.getMinutes()}:`

}else{
    minutes.innerHTML = dateTime.getMinutes()+ ":"
}
seconds.innerHTML = dateTime.getSeconds() + " "
//  dateTime.getHours >= 12 ? amPm.innerHTML = 'PM' : amPm.innerHTML = 'AM';
// // hour = hour % 12 || 12;
// // amPm.innerHTML = 

if(dateTime.getHours() > 12){
    amPm.innerHTML = "PM"
}
else{
    amPm.innerHTML = "AM"
}


}

setInterval(clock)




