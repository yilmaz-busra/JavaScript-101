// Karşılaştırma Operatörleri ve Mantıksal Operatörler
let price="100";
let user="büşra";


// == eşitse
console.log(price==1)
console.log("== :", price==100)

// === hem değeri hem de türü eşitse
console.log("=== :", price === 1)
console.log("=== :", price === 100)

// != eşit değilse
console.log(user != "guest")

// < küçükse 
console.log("price<100", price < 100)

// küçük veya eşitse
console.log("price<=100", price <= 100)

//büyükse
console.log("price>200", price > 200)

// büyük veya eşitse
console.log("price>=100", price >= 100)

// && ve
console.log(price && user !="guest")

// || veya
console.log(price || user !="guest")

// ! degil (tersi)
user="guest"
price=1;
console.log(price>0 && !user == "guest")