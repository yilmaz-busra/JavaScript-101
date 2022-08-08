// Ternary Operator
let userName=prompt("kullanıcı bilginiz yaziniz:")
let info = document.querySelector("#info")

//ternary kullanımı 
// kosul ? dogruysa :yanlıssa
info.innerHTML=` ${userName ? userName:"Kullanıcı ismi girmedi"} `