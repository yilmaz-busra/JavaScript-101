localStorage.setItem('puff','anahtar')
localStorage.setItem('Busra','Yılmaz')
// localStorage.remove('','')

/* -------LOCALSTORAGE FARKLI TÜRDE VERİLER EKLEME------ */

let user ={ userName:"busrayilmaz", isActive:true}
console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo=localStorage.getItem('userInfo') //bilgiyi al
userInfo=JSON.parse(userInfo)
console.log(userInfo)



