for(let i=0;i<5;i++){
    let b=""
    for(let j=0;j<5;j++){
        if(i==0||i==4||j==0||j==4){
            b+="*"
        } 
        else{
            b+=" "
        }   
    }
// document.write("<br>")
console.log(b)
}

let n=5;
for(let i=0;i<n;i++){
    let a="";
    for(let j=0;j<n-i;j++){
        a+=" "
    }
    for(j=0;j<i*2-1;j++){
        a+="*"
    }
    // console.log("<br>")
    console.log(a)
}
for(let i=n;i>0;i--){
    let a=""
    for(let j=0;j<n-i;j++){
        a+=" "
    }
    for(j=0;j<i*2-1;j++){
        a+="*"
    }
    // document.write("<br>")
    console.log(a)
}

let x=5;
for(let i=1;i<x;i++){
    let a=""
    for(let j=1;j<=x-i;j++){
        a+=" "
    }
    for(let j=1;j<i*2-1;j++){
        a+=j
    }
    console.log(a)
}
for(let i=x;i>0;i--){
    let a=""
    for(let j=1;j<=x-i;j++){
        a+=" "
    }
    for(let j=1;j<i*2-1;j++){
        a+=j
    }
    console.log(a)
}
