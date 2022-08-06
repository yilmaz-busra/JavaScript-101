 /*-----------BOOLEAN VERİ TURU İLE CALISMA*/ 
 //Boolean() fonksiyonu bize sadece iki farklı değer dönebilir. Bunlar ya true ya da false'dur.

 // 0 ve 1 
 let isActive=false //0
 isActive=true;
 console.log(isActive)


 let userName;
 let isUserName=Boolean(userName)
 console.log(isUserName)

 Boolean("1") //true
Boolean("0")  //true
Boolean("")  //false

userName="user"
console.log("User Name ", Boolean(userName))

// 0,-0,null false,NaN, undefined, ("") ->
Boolean(0) //false
Boolean(-0) //false
Boolean(-0.1) //true
Boolean(0==0) //true

Boolean(userName.length>0) //true // karar yapılarında anlatılacak

