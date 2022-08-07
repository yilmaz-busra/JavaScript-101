// Liste İçerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek

let lastChild=document.querySelector("ul#list>li:last-child")
lastChild.innerHTML="son oge değiştiii"

let firstChild=document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="ilk oge değiştiii"

//yeni oge ekleme

let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement('li')

liDOM.innerHTML="kendi olusturduğumuz oge"

// ulDOM.append(liDOM)  en sona ekliyor


//ulDOM.prepend(liDOM)  başa yeni öge eklemek




