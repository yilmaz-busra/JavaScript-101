let items=[1,2,3,4,5]

//array içinde array:
let femaleUsers=["Ayşe","Hulya","Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)
console.log(items[0].length) //array içindeki arrayin length bilgisini almak
console.log(items[0][2]) //merve bilgisine ulaştık

//array içersinde oge ayırmak
let newItems = items.slice(1,5)
console.log("newItems: ", newItems)
console.log("items: ", items)



