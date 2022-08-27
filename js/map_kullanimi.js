//array map kullanımı
//Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır 
// ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. 
// Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. 
// Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. 
// Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

const USER =["Ayse","Mehmet","taha","selim"]

const NEW_USERS=USERS.map(user =>user.toLowerCase())
console.log(NEW_USERS)

//userName icinde orijinal isim kalsin
//shortName icinde ilk harf buyuk (A.)
// newName icinde ilk harf buyuk olsun

const USERS_OBJ=USERS.map(item =>
    { 
        return{
            userName: item, shortName:`${item[0]}.`, newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase}`
        }
    }
    )
    console.log(USERS_OBJ)