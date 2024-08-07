let num=0;
let num2=0;
function move(){
    if(num<400 && num2==0){
        num+=50;
        document.getElementById('ball').style.marginLeft=num+"px";
    }
    else if(num2>200 && num>0){
        num-=50
        document.getElementById('ball').style.marginLeft=num+"px"
        console.log(num)
    }
    else if(num<=0){
        num2-=20
        document.getElementById('ball').style.marginTop=num2+"px"
    }
    else if(num2<=200){
        num2+=20
        document.getElementById('ball').style.marginTop=(num2)+"px"
    }
}
setInterval(move,500)