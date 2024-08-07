let n=5
let a=""


for(i=5;i>0;i--){
    let a=""
    for(j=5;j>0;j--){
        if(i+j>=n+1){
            a+=j
        }
        else{
            a+=" "
        }
    }
    for(let j=1;j<=5-i;j++){
        a+=" "
    }
    let k=6;
    for(let j=k-i;j<=n;j++){
        a+=j;
        k--;
    }
  
    console.log(a)
}



let m =5;
for(i=0;i<n;i++){
    let a=""
    for(j=m;j>=n-i;j--){
        a+=j
    }
    for(j=m-1-i;j>0;j--){
        a+=" "
    }
    for(j=1;j<=n;j++){
        if(i+j>=n){
            a+=j
        }
        else{
            a+=" "
        }
    }
    
    console.log(a)
}
        









