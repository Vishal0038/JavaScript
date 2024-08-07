let arr1=[4,7,6,5,8]
let arr2=[3,0,2,1,6,9]
let merge=arr1.concat(arr2)
let mlen=merge.length
for(i=0;i<mlen;i++){
    let temp=""
    for(j=0;j<mlen;j++){
        if(merge[i]<merge[j]){
            temp=merge[i]
            merge[i]=merge[j]
            merge[j]=temp
        }
    }   
}
console.log(merge)
    if(mlen%2!=0){
        console.log(merge[Math.trunc(mlen/2)])
    }
    else{
        console.log(merge[(mlen/2)-1]+" and "+merge[(mlen/2)])
    }