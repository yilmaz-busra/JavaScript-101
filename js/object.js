let laptop1={
    brand:"Apple",
    model:"MacBook Pro",
    "2kg":2,
    modelName:"MacBook Pro",
    model_name:"MacBook Pro" // model-name şeklinde tanımlanamaz

}

console.log(laptop1)
//dogru anahtar bilgisini olusturmak
console.log(laptop1.brand,laptop1["brand"])
console.log(laptop1.model,laptop1["model"])
console.log(laptop1["2kg"])

//anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)


//yeni bilgi eklemek
laptop1.version="10.15.7"
console.log(laptop1)

// anahtar bilgilerine ulasmak (keys)-> object.keys(item)
keys=Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
} 
)

//deger bilgilerine ulasmak (values)-> Object.valuees(item)
console.log(
    Object.values(laptop1)
)

let values =Object.values(laptop1)

values.forEach( value=> {
    console.log("value: ", value)
})

//ÖZET

// Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
// * Key / value şeklinde property'leri saklar.
// * Key ifadesi string veya sembol olmalıdır.
// * Value ifadesi herhangi bir değer alabilir.
// * Belli bir property'e erişmek için kullanabileceklerimiz: 
//   * Dot notation: obj.property 
//   * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

// Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 



// stediğimiz zaman property ekleyebilir, kaldırabilir ve objeden property okuyabiliriz. Mevcut bir property'yi eklemek veya değiştirmek için şu şekilde yazabiliriz:

// car.model = "320i"; // objeye model isminde bir key ekler ve value olarak string atar

// Bir propertyy’i kaldırmak için silme(delete) operatörünü kullanabiliriz:

// delete car.year;

