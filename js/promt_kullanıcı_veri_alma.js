let fullName=prompt("Lütfen adınızı giriniz: ")
// console.log(fullName)

let greeting= document.querySelector("#greeting")

greeting.innerHTML=`${greeting.innerHTML}<small style="color:red">${fullName}</small>`