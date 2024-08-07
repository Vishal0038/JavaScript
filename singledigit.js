let number=Number(prompt("Enter Number"))
num=number.toString()
for(i=0;i<num.length;i++){
    digit=number%10
    number=Math.trunc(number/10)
    // console.log(number)
    console.log(digit)
}

function sum(){
    console.log("i am a function")
    return 50
}

console.log(sum())