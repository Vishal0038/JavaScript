const arr=[31,32,33,34,35,36,37,38,39,40];
let arr1=[];

let j=0;
for(let i=0;i<arr.length;i=i+2){
        arr1[i]=arr[j];
        arr1[i+1]=arr[j+5];
        j++;
}
console.log(arr1);