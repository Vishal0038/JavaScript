let arr=["hari","ravi","joe","surya"]
// arr.unshift(6,7)
// console.log(arr)
for(let i=0;i<arr.length;i++){
    if(arr[i]){
        let text=""
        for(j=arr[i].length;j>=0;j--){
            text+=arr[i].charAt(j)
        }
        arr[i]=(text)
    }
}
console.log(arr)
