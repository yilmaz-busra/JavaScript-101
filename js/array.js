let items = [10,20,30,40, ]
console.log("items - ilk hali :", items)

//array: sona eleman eklemek ->push
items.push(50)
console.log("50 : ", items)

//array: basa oge eklemek -> unshift
items.unshift(5)
console.log("5: ", items)

//array: sondaki ogeyi cıkarmak -> pop
 let lastItem = items.pop() // son elemani lastItem içerisine ekledik
 console.log("lastItem: ", lastItem, ", items: ", items)

 //array: bastaki ogeyi cikarmak -> shift
 let firstItem = items.shift() // ilk elemani firstItem içerisine ekledik
 console.log("firstItem: ", firstItem, ", items: ", items)

 //array içindeki bir ogenin bilgisinin degistirilmesi
 //ilk ogesinin degistirilmesi
 items[0]=5;
 console.log(items);
//sonuncu ogenin degisimi:
 items[items.length-1]=1000
 console.log(items)

 
