

// let h2= document.getElementsByTagName('h2') 

let title = document.getElementById('title')
title.innerHTML="Degisen Bilgi"
console.log(title.innerHTML)

let link=document.querySelector("ul#list>li>a")
console.log(link)
link.innerHTML +=" değişti"
console.log(link)
link.style.color="red"
link.classList.add('btn')
