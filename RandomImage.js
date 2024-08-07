let img='url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHe5f-Kh3CdxeMEiaRlHVzP0kQzBIS4Hqjlg&s")'
let count=0
let point=document.getElementById('point')
function display(){
    var ran=Math.floor(Math.random()*9)
    document.getElementsByClassName('box')[ran].style.backgroundImage=img  
    setTimeout(empty,1000) 
}

function empty(){
    for(i=0;i<9;i++){
    document.getElementsByClassName('box')[i].style.backgroundImage="url('')"
    }
}

setInterval(display,2000)

function win(a){
    // console.log(document.getElementsByClassName('box')[a].style.backgroundImage)
    // console.log(img)
    // console.log(document.getElementsByClassName('box')[a].style.backgroundImage===img)
    if(document.getElementsByClassName('box')[a].style.backgroundImage==img){
        count+=5    
    }
    else{
        count-=2
    }
    point.innerHTML=count
}
