// TEMEL KURALLAR

// 1: bir fonksiyona bir veya birden fazla parametre alabilir veya hiç almayabilir
// 2:bir fonksiyon dişari bilgi gönderebilir(return) veya göndermeyebilir
// 3: mumkunse fonksiyonun bagımlılıklarını azaltmak gerekir

let firstName =" Lorem"

function greetings(firstName="", lastName=""){
    console.log(`Merhaba ${firstName} ${lastName}`)
}  //default parametre alır





 
console.log(firstName) //degisken bilgisi var
greetings() //fonkisyona parametre göndermedi
 greetings("parametre")



 function greetings2( firstName, lastName){
    let info= ` Merhaba ${firstName} ${lastName}`
    return info
 }

 let greetingsInfo= greetings2("AD", "Soyad")
 console.log(greetingsInfo)

 