let str="Hello World"
let text=""
text+=str.slice(6,11)
let reverse1=""   
console.log(text.length)

for(i=text.length;i>=0;i--){
    reverse1+=text.charAt(i)
}
let first=""
first+=str.slice(0,6)
let reverse2=""
for(i=first.length;i>=0;i--){
    reverse2+=first.charAt(i)
}

console.log(reverse1.concat(reverse2))