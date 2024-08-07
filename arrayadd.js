let num=[9,8,9]
let number=""
for(i=0;i<num.length;i++){
    number+=num[i]
}
let result=Number(number)+1
let str=result.toString()
for(i=0;i<str.length;i++){
   num[i]=str[i]
}
console.log(num)
