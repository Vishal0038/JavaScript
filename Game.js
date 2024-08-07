let pic="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwwBjAawv-7QYKk64dbeL5hNi2BJncEdpuw&usqp=CAU')";
let arr=[0,0,0,0,0,0,0,0,0]
function img(i){
    if(validate(i)){
        display(i)
    }
    else{
        alert("invalid")
    }
}

function validate(a){
    if(arr[a]==0){
        return true;
    }
    else{
        return false;
    }
}

function display(c){
    let pic1="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwwBjAawv-7QYKk64dbeL5hNi2BJncEdpuw&usqp=CAU')"
    let pic2="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQa0hceokJp23ia2bGbifDsCvu8gXV4SFRA&usqp=CAU')"

    if(pic==pic1){
        document.getElementsByClassName('input')[c].style.backgroundImage=pic2;
        arr[c]=pic2;
        if(result(pic)){
            alert("Player 2 is the winner")
            for(i=0;i<9;i++){
                document.getElementsByClassName('input')[i].style.backgroundImage="url('')"
            }
        }
        pic=pic2;
    }
    else if(pic==pic2){
        document.getElementsByClassName('input')[c].style.backgroundImage=pic1
        arr[c]=pic1
        if(result(pic)){
            alert("Player 1 is the winner")
            for(i=0;i<9;i++){
                document.getElementsByClassName('input')[i].style.backgroundImage="url('')"
            }
        }
        pic=pic1;
    }
}

function result(r){
    if((arr[0]==r && arr[1]==r && arr[2]==r)||
    (arr[3]==r && arr[4]==r && arr[5]==r)||
    (arr[6]==r && arr[7]==r && arr[8]==r)||
    (arr[0]==r && arr[3]==r && arr[6]==r)||
    (arr[1]==r && arr[4]==r && arr[7]==r)||
    (arr[2]==r && arr[5]==r && arr[8]==r)||
    (arr[0]==r && arr[4]==r && arr[8]==r)||
    (arr[2]==r && arr[4]==r && arr[6]==r)){
        return true;
    }
    else{
        return false;
    }
}

