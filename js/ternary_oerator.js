// Ternary Operator
let userName=prompt("kullanıcı bilginiz yaziniz:")
let info = document.querySelector("#info")

//ternary kullanımı 
// kosul ? dogruysa :yanlıssa
info.innerHTML=` ${userName ? userName:"Kullanıcı ismi girmedi"} `

//TEST SORULARI DENEME
//soru 1:
// let boolean;

// const isBooleanTrue = boolean ? true : false;

// console.log(isBooleanTrue)
// >> false

// console.log(boolean)

//soru2
// let age = 24;
// let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

// console.log(permission);

// soru3
// let firstCity = "Ankara";

// let secondCity = "İstanbul";

// const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

// console.log(isEqual)

// soru4
// var money;
// var canBuy = 
//     (money < 17) ? "Satın alamazsın..":
//     (money > 30) ? "Satın alabilirsin..":
//     "Para miktarını girmen gerekmektedir..";

// console.log(canBuy) 