var slide=document.querySelector('.slidebar')
function slider() {
     slide.classList.add('sl')
}
function cancleslide(){
    slide.classList.remove('sl') 
}

var navbar=document.querySelector('.nav')
console.log(navbar)
window.addEventListener('scroll',function () {
    if (scrollY>90) {
navbar.classList.add('navs')
    }
    else{
        navbar.classList.remove('navs')  
    }
})
var icon=document.querySelectorAll('.icon')

var opacitydivs=document.querySelectorAll('.opacitychild')

function remove()
{
opacitydivs.forEach((opd)=>{
    opd.classList.remove('bads')
})
icon.forEach((ele)=>{
    ele.classList.remove('icons')
})
}

var count=0

function heart( ){
remove()
    opacitydivs[0].classList.add('bads')
    icon[0].classList.add('icons')
    count=0
}
 function bezier(){
    remove()
    opacitydivs[5].classList.add('bads') 
    icon[5].classList.add('icons')
    count=5
}
function file(){
    remove()
    opacitydivs[1].classList.add('bads') 
    icon[1].classList.add('icons')
    count=1
}
function book(){
    remove()
    opacitydivs[4].classList.add('bads') 
    icon[4].classList.add('icons')
    count=4
}
function code(){
    remove()
    opacitydivs[2].classList.add('bads') 
    icon[2].classList.add('icons')
    count=2
} 
function radio(){
    remove()
    opacitydivs[3].classList.add('bads') 
    icon[3].classList.add('icons')
    count=3
}
opacitydivs[count].classList.add('bads')
icon[count].classList.add('icons')
setInterval(()=>{
    remove()
        opacitydivs[count].classList.add('bads')
        icon[count].classList.add('icons')
        if(count==5)
        {
            count=-1
        }
        count++
    
    } , 4000)
    // 
var textdiv=document.querySelectorAll('.td')
function removes()
{
textdiv.forEach((opd)=>{
    opd.classList.remove('tdo')
})
}
textdiv[0].classList.add('tdo')
function img1( ){
    removes()
    textdiv[0].classList.add('tdo')
    }
     function img2(){
        removes()
        textdiv[1].classList.add('tdo')
    }
    function img3(){
        removes()
        textdiv[2].classList.add('tdo')
    }
    function img4(){
        removes()
        textdiv[3].classList.add('tdo')
    }
    function img5(){
        removes()
        textdiv[4].classList.add('tdo')        
    } 
    function img6(){
        removes()
        textdiv[5].classList.add('tdo')
    }