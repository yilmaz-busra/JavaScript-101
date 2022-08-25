let items=[1,2,3,4,5]

//array içinde array:
let femaleUsers=["Ayşe","Hulya","Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)
console.log(items[0].length) //array içindeki arrayin length bilgisini almak
console.log(items[0][2]) //merve bilgisine ulaştık

//array içersinde oge ayırmak -> splice(pos,item?)
let newItems = items.splice(1,5)
console.log("newItems: ", newItems)
console.log("items: ", items)

//array içindeki ogenin index bilgisini bulmak ->indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

//array kopyalamak ->slice [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() //son oge cikarttık
console.log("copyItems", copyItems)
console.log("items", items);

let es6Items =[...items] // es6 ve sonrasında gelen kopyalama islemi
console.log(es6Items)

//Ikı Array Bilgisini Birlestirmek -> [...ES6,...ES6]
let allUsers=[...femaleUsers,...maleUsers] //es6 ve sonraında birden fazla array yapısını birlestirmek
console.log(allUsers)

// array içindeki bilgiyi string e cevirme ->toString, join
console.log(allUsers.toString())
console.log(allUsers.join("---"))

// istediğimiz index bilgisine oge eklemek -> splice(index,0,value)
allUsers.splice(allUsers.length-1 ,0,"melissa")
allUsers.splice((Math.floor(allUsers.length)/2) ,0,"lorem")
console.log(allUsers)