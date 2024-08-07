let arr=[1,2,3,4,5,6,7,8,9,10]
let i=0
if(arr[i]){
    let text=[]
    for(i=4;i>=0;i--){
    text.push(arr[i])
    }   
   
    for(i=9;i>4;i--){
        text.push(arr[i])
    }
    console.log(text)
}

