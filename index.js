let hrs=document.getElementById("hours");
let min=document.getElementById("minutes");
let sec=document.getElementById("seconds");
let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");
let currentDate=new Date(); 
setInterval(function time(){
    let currentTime=new Date();

hrs.innerText=(currentTime.getHours()<10?"0":"")+currentTime.getHours()+":";
min.innerText=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes()+":";
sec.innerText=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

},1000)
const weekDay=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const yearMonths=["January","Feburary","March","April","May","June","July","August","September","October","November","Decemember"];

date.innerText=(currentDate.getDate());
day.innerText=weekDay[currentDate.getDay()-1];
month.innerText=yearMonths[currentDate.getMonth()];
year.innerText=currentDate.getFullYear();
time();
