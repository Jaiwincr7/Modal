const btn1=document.querySelector(".project");
const modal=document.querySelector(".modal");
const back=document.querySelector(".background-img");
const contain=document.querySelector(".container");
const cancel=document.querySelector(".cancel")

btn1.addEventListener("click",hello);
function hello(){
    modal.style.display="block";
    back.style.filter="blur(6px)";
    modal.style.display="block";
    contain.style.filter="blur(6px)";
}

cancel.addEventListener("click",yoi)
function yoi(){
    modal.style.display="none";
    back.style.filter="blur(0px)";
    contain.style.filter="blur(0px)";
}