const pctrshoes= document.getElementById("tswira")
const headerpctr= document.getElementById("nike-seeklogo")
const headerbar= document.getElementById("options")
const input=document.getElementById("input1")
const search=document.getElementById("search")

function ejbdtswira() {
    pctrshoes.classList.add("move")
    headerpctr.classList.add("after")
    headerbar.classList.add("after")
    
}

setTimeout(ejbdtswira,2000)


function scaleup(){
    input.style.transform= "scale(1.1)"
    search.style.transform="scale(1.1)"
}

function scaledown(){
    input.style.transform= "scale(1)"
    search.style.transform="scale(1)"
}



input.addEventListener('mouseenter',scaleup)
search.addEventListener('mouseenter',scaleup)
input.addEventListener('mouseleave',scaledown)
search.addEventListener('mouseleave',scaledown)

const menubutton= document.getElementById("menu")
const menu=document.getElementById("menupaper")
const closemenu= document.getElementById("closemenu")
menubutton.onclick= function () {
    menu.classList.add("show")
    
    
}

closemenu.onclick= function(){
    menu.classList.remove("show")
   

}



