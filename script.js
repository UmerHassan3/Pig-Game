'use strict';
let sum=[0,0];
const score=[0,0];
const stop=0;
let activeplyr=0;
let current=0;


document.querySelector('.NEX').addEventListener('click',function(){
    const secNum=Math.trunc(Math.random()*6)+1;
    
    if(secNum!=1){
        current = current + secNum; 
        document.querySelector('.Random').textContent=current;
   
    document.getElementById(`cur-${activeplyr}`).textContent=current;

    
}
else{

    score[activeplyr] =score[activeplyr]+0;

    current =0;
    document.getElementById(`cur-${activeplyr}`).textContent=0;

   
    activeplyr=activeplyr===0?1:0;

}
});



document.querySelector('.hol').addEventListener('click',function(){
    score[activeplyr] =score[activeplyr]+current;
    document.querySelector('.Random').textContent=0;

current =0;
document.getElementById(`score-${activeplyr}`).textContent=score[activeplyr];
document.getElementById(`cur-${activeplyr}`).textContent=0;

activeplyr=activeplyr===0?1:0;
});