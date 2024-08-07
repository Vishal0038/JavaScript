let a=12345
let b=a%100000/10000
let c=a%10000/1000
let d=a%1000/100
let e=a%100/10
let f=a%10

let b1=Math.trunc(b)
let c1=Math.trunc(c)
let d1=Math.trunc(d)
let e1=Math.trunc(e)
let f1=Math.trunc(f)

console.log(b1)
console.log(c1)
console.log(d1)
console.log(e1)
console.log(f1)

num=f1.toString()+e1.toString()+d1.toString()+c1.toString()+b1.toString()

console.log(parseInt(num))
