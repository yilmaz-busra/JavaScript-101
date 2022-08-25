const Lorem_List =[
    'lorem','ipsum','dolor','amet','consectetur','adipisicing','elit'
]

let counter=0

// for(; counter<10; counter++){
//     console.log(counter)
//     if(counter===5) {break}
// }

// for (; counter<10;counter++){
//     if(counter===5) {continue}
//     console.log(counter)
// }


const UL_DOM=document.querySelector('#userList')
let index =0;

for(;index<Lorem_List.length;index++){
    if(Lorem_List[index]=="dolor") {break} //buna kadar yazdır 
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = Lorem_List[index]
    UL_DOM.append(LI_DOM)
}
console.log("continue")
for(;index<Lorem_List.length;index++){
    if(Lorem_List[index]=="dolor") {continue} //bunu atla
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = Lorem_List[index]
    UL_DOM.append(LI_DOM)
}