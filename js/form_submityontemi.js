
let formDOM =document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)



function formSubmit(event){
    event.preventDefault() //default islemi engelledi
    console.log("islem gerceklesti")

    //inputun bilgisini almak inputun name bilgisi olmalı!!
    let scoreInputDOM=document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score',scoreInputDOM.value)
}