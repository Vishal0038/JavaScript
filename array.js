const arr=[8,3,9,2,5]

let temp=''
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i]<=arr[j]){
            temp =arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    } 
}
console.log(arr)


const num=[2,4,6,8,5,9]
for(i=0;i<num.length;i++){
    for(j=0;j<num.length;j++){
        if(arr[i]+arr[j]==10){
            console.log(arr[i]+"+"+arr[j])
        }
    }
}

