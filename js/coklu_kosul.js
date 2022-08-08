// Çoklu Koşul Yapısı Kullanımı

let userName= prompt("kullanici adiniz:")
let age=prompt("yaşiniz")
let info=document.querySelector("#info")

if(userName && age >=18){
    console.log("ehliyet alabilirsiniz")
} else if( !userName) {
    console.log("kullanici adınız yok")
} else if(!(age>=18)) {
    console.log("Yas Bilginiz yok veya 18 yasindan kucuksunuz")
 
} else if(!(age>=18)){
    info.innerHTML="Yas bilginiz yok veya 18 yasından kücüksünüz"
}
