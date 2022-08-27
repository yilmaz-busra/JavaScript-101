// Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

const PRODUCTS=["Mic","Cable","Speaker","Desktop PC", "Server", "Mouse","Keyboard"]

const NEW_PRODUCTS=PRODUCTS.filter(item =>item.length>5)
console.log(NEW_PRODUCTS)

//aktif kullanıcılar
const USERS =[
    {fullName: "Ayse Sumer", isActive:false},
    {fullName: "Ayse Yılmaz", isActive:true},
    {fullName: "Asya Yalcin", isActive:true},
    {fullName: "Aksel Durmaz", isActive:false},
]

// const ACTIVE_USERS=USERS.filter(user=>user.isActive ===true)
const ACTIVE_USERS=USERS.filter(user=>user.isActive)
console.log(ACTIVE_USERS)
