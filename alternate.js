let str1="hello"
let str2="world"
let text=""
for(let i=0;i<str1.length;i++){
    if(i<str1.length){
        text+=str1.charAt(i)
    }
    if(i<str2.length){
        text+=str2.charAt(i)
    } 
}
console.log(text)



