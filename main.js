// let btn=document.querySelector('.btn1');
// const element=document.querySelector('.element');

// btn.onclick=function(){
//     element.classList.add('dimensions')
// }

let btn=document.querySelector('.btn')
let btn1=document.querySelector('.btn1')
const one=document.querySelector('.one')

btn.onclick=function(){
    one.classList.add('color')
    one.classList.add('dimensions')
    one.classList.add('flex')
}
btn1.onclick=function(){
    one.classList.remove('color')
}
