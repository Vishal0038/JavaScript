let min=3;
let time=min*60
let count1=document.getElementById('minute')
let count2=document.getElementById('second')
setInterval(timer,1000)
function timer(){
    let minute=Math.floor(time/60)
    let second=time%60
    if(time>0){
        document.getElementById('image').style.display="none"
        count1.innerHTML=minute
        count2.innerHTML=second
        time--;
    }
    if(time==0){
        count1.innerHTML=""
        count2.innerHTML=""
        document.getElementById('clock').style.display="none"
        document.getElementById('image').style.display="block"
    }
}