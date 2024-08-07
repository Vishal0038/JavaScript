let sent="god gave a beautiful world to live"
let word=sent.split(" ")
console.log(word)
// let capText=""
// for(let i of word){
//     if(i){
//         capText+=sent.charAt(i).toUpperCase()
//     }
//     else{
//         capText+=sent.charAt(i)
//     }
  
// }
// console.log(capText)

for(i=0;i<word.length;i++){
    word[i]=word[i][0].toUpperCase()+word[i].substring(1)
    word[i][0]
}
console.log(word.join(" "))
