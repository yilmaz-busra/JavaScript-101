// STRİNG VERİ TURU İSLEMLERİ

let email="b.busraayilmaz@gmail.com"
let firstName="büşar"
let lastName=" yılmaz"

//string karakter sayisis -> length

console.log( email.length)

// ilk karakter bulma ->[0]
console.log(firstName[0])
console.log(firstName.charAt(1))

//buyuk harf / kucuk harf:
firstName= firstName.toUpperCase() //tüm harfleri büyük karakter yapar
console.log(firstName)

firstName= firstName.toLowerCase() //tüm harfleri küçük karakter yapar
console.log(firstName)

//string içinde istediğimiz bilgiyi aramak ve yerini bulma ->search
console.log(email.search("@"))
console.log(email[15])


email.search("dşlfşa")
-1 // eğer  olmayan bir şey aratırsam -1 sonucunu alırım

//belli bir yere kadar olanı almak ->slice : (domain bilgisi)

let DOMAIN = email.slice( email.search("@")+1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0,DOMAIN.indexOf('.')) // sadece gmail kısmını aldık

)

//bilgiyi degistir ->replace:
email=email.replace('gmail.com','kodluyoruz.org')
console.log(email)

//includes true ya da false var ya da yok olarak bilgi verir
//istediğim bilgi var mı ->includes

email.includes('dşlfs') //false
email.includes('@') // true

//istediğim bilgiyle baslaadı mi? bitti mi_> starsWidth ,endsWidth
email.endsWith('kodluyoruz.org') //true
console.log(
    email.endsWith('kodluyoruz.org')
)

//ilk harflerini büyük yapmak
firstName="Hakan"
lastName="Yılmaz"
let fullName=` ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)