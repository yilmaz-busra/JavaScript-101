let username="hakan"
const DOMAIN =" kodluyoruz.org"

let email= username + "@" + DOMAIN
//console.log("Merhaba", username, "sitemize hosgeldiniz", "mail adresin:", email)

let info = ` 
Merhaba ${username} sitemize hoşgeldin... mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
kisa isminiz: ${username[0]}.
borcunuz: ${(2+3)*10} TL
gunun saat bilgisi: ${new Date().getHours()}
 `

 console.log(info)

 