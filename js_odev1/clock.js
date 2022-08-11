
let alert=prompt("isminizi girin")
let myName=document.querySelector("#myName")
myName.innerHTML=alert;


function showtime (){
    const today=new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let days =["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe","Cuma","Cumartesi"]
    let currentDay = days[d].toString();
    let myClock=document.querySelector("#myClock")
    
    myClock.innerHTML= h + ":"+ m +":" + s + " " + currentDay;
    setTimeout(showtime,1000)
}

showtime();
