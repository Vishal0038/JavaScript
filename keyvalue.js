let arr=[10,20,30,40,50]

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

let first={
    name: "Vishalini",
    age: 21,
    gender: "female"
}
console.log(first["name"])

let arr1=[
    {
        name: "Vishalini",
        age: 21,
        gender: "female"
    },
    {
        name: "Vishalini",
        age: 21,
        gender: "female"
    }
]
for(let i of arr1){
    console.log(i)
}

for(let i in arr1){
    console.log(i)
}