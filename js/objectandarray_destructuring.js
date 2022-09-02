//object destructuring:

let settings={
    userName:"loremIpsum",
    password:"BadPassword",
    isActive:false,
    ip:"127.0.0.1",
    serverName:"kodluyoruz.org"
}

//obje icindeki bilgilerin tek seferde cikarilmasi
// let userName=settings.userName
// console.log(userName)

//rename &&  destructuring
let{userName:user,password,isActive,ip:ServerIP,serverName}=settings
console.log(userName,password,isActive,ip,serverName)
console.log(settings) 

//obje icindeki bazi bilgilerin cikarilmaz
let {userName:userName2, password:password2,isActive:isActive2,...newSettings}=settings

//eger degisken ismi daha once tanımlanmadıysa:
//let {userName,password,isActive,...newSettings} = newSettings
console.log(userName2,password2,isActive2,newSettings)

//objenin destructuring(...) ile kopyalanması

//HATALI!!
// let settings2=settings
// settingssettings2.userName="Degisen Bilgi"
// console.log("settings", settings)
// console.log("settings2",settings2)

//Dogru kullanımı
 let settings2={...settings}
 settingssettings2.userName="Degisen Bilgi"
 console.log("settings", settings)
 console.log("settings2",settings2)

let score =[100,200,300,400]

let [score1, score2, ...otherscore]= score;

console.log(score1,score2,otherscore)
//object kopyalama ile ayni... let settings2={...settings}
let copyOfScore=[...score]
console.log(copyOfScore)
