 //NUMBER

 // number veri turu kullanımı
 let price=100
 let tax=0.18
 let priceTax= price*tax
 let total = price + priceTax
 console.log(
    "Fiyat:", price,
    "KDV Orani:", tax,
    "KDV Tutari:", priceTax,
    "Fiyat: ", total
 )

 // arttırma ve  azaltma islemeri:
 let counter=320
 counter = counter + 1 //uzun yontem
 counter +=1;
 counter ++;
 console.log(counter);

 counter -=1;
 counter --;
 console.log(counter);

 counter*=10;
 console.log(counter)

 counter/=2;
 console.log(counter)

 // islem önceligi
 console.log(2+3*10)
 console.log((3+2)*10)

 //mod(kalan alma) %
 // sayi tek mi çift mi
 console.log(14%2)

 //8 urun alan koliye tum urunler sıgıyor mu
console.log("koli kalan urun örneği",18%8)

//us alma**:
console.log(2*2*2*2)
console.log(2**4)

//asagi yuvarlmam islemi -> Math.floor;
console.log( "Asagi Yuvarlama",Math.floor(1.7))

//yukari yuvarlama islemi -> Math.ceil;
console.log("Yukari Yuvarlama", Math.ceil(1.1))

//yakina yuvarlama islemi -> Math.round;
console.log("Yakina Yuvarlama", Math.round(1.4)) //1 e yuvarlar
console.log("Yakina Yuvarlama", Math.round(1.5)) //2ye yuvarlar

let stringNumber="11"
console.log(stringNumber);
let newNumber= Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gönderildi.", Number("111"))