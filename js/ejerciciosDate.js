
const calculador=document.querySelector('.calcular');
calculador.addEventListener('click',()=>{
let fecha=new Date(document.querySelector('.calendario').value);

const inputdate=
{   dia_1:fecha.getDay(),
    ano_1:fecha.getFullYear(),
    mes_1:fecha.getMonth()+1,
   
}


let dateF=new Date();
let d2=dateF.getDate();

console.log(d2 +' aqui el dia');
console.log(inputdate.dia_1+ ' aqui dia');
console.log(inputdate);
let m2=1+dateF.getMonth();
let a2=dateF.getFullYear();
let meses=[31,28,31,30,31,30,31,31,30,31,30,31];

if(inputdate.dia_1 > d2)
{
    d2 = d2 + meses[m2-1];
    m2=m2-1;
  
}

if (inputdate.mes_1>m2)
{
    m2=m2+12;
    a2=a2-1; 
  
}

let d=d2-inputdate.dia_1;
let m=m2-inputdate.mes_1;
let a=a2-inputdate.ano_1;

let ano=(document.querySelector('.ano').innerHTML=a);
let mes=(document.querySelector('.mes').innerHTML=m);
let dia=(document.querySelector('.dias').innerHTML=d);

});