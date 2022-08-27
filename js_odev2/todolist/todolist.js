 let btnDOM = document.querySelector("#liveToastBtn")
 let taskDOM = document.querySelector("#task") 
 let gorevDOM=document.querySelector('#liveToast')
 let ulDOM=document.querySelector('#list')
 let lixDOM=document.querySelectorAll("li")
 
 btnDOM.addEventListener('click',ogeekle)

 
 function ogeekle(){
    if(taskDOM.value != ""){
        let liDOM=document.createElement('li')
        liDOM.innerHTML=taskDOM.value;
        ulDOM.append(liDOM);
        taskDOM.value=""
        $('.success').toast('show')
        let closeBtn= document.createElement('span')
        closeBtn.classList.add('close')
        closeBtn.textContent= '\u00D7';
        liDOM.append(closeBtn)
        closeBtn.onclick=remove;
        liDOM.onclick=check;
    }else{
        $('.error').toast('show')
    }
   

 }

  for(let i=0;i<lixDOM.length;i++){
    let closeBtn= document.createElement('span')
    closeBtn.classList.add('close')
    closeBtn.textContent= '\u00D7';
    lixDOM[i].append(closeBtn)
    closeBtn.onclick=remove;
    lixDOM[i].onclick=check;
  }

  function remove(){
    this.parentElement.remove();

  }

  function check(){
    this.classList.add('checked')


  }