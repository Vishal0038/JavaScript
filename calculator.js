let numbers=[];
function getValue(i){
    let value=document.getElementsByClassName('num')[i].innerHTML;
    let numeral=""
    let bg=""
    if([i]==0){
        numeral+="One"
        bg+="red"
    }
    if([i]==1){
        numeral+="Two"
        bg+="green"
    }
    if([i]==2){
        numeral+="Three"
        bg+="yellow"
    }
    if([i]==3){
        numeral+="Four"
        bg+="pink"
    }
    if([i]==4){
        numeral+="Five"
        bg+="violet"
    }
    if([i]==5){
        numeral+="Six"
        bg+="orange"
    }
    if([i]==6){
        numeral+="Seven"
        bg+="gray"
    }
    if([i]==7){
        numeral+="Eight"
        bg+="indigo"
    }
    if([i]==8){
        numeral+="Nine"
        bg+="wheat"
    }
    if([i]==9){
        numeral+="Zero"
        bg+="salmon"
    }
    document.getElementsByClassName('num')[i].innerHTML=numeral;
    document.getElementsByClassName('num')[i].style.backgroundColor=bg ;
    console.log(value)
    numbers.push(value)
}
function sum(){
    let add=0
    for(i=0;i<numbers.length;i++){
        add+=Number(numbers[i]);
    }
    console.log(add)
}
function difference(){
    let sub=0
    for(i=0;i<numbers.length;i++){
        sub-=Number(numbers[i])
    }
    console.log(sub)
}
function product(){
    let mul=1
    for(i=0;i<numbers.length;i++){
        mul*=Number(numbers[i])
    }
    console.log(mul)
}
function division(){
    let divide=1
    for(i=0;i<numbers.length;i++){
        divide/=Number(numbers[i])
    }
    console.log(divide)
}
function modulo(){
    let mod=0
    for(i=0;i<numbers.length;i++){
        mod%=Number(numbers[i])
    }
    console.log(mod)
}