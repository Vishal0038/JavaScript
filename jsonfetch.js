fetch("./info.json")

.then(read=>read.json())
.then(read=>{console.log(read[1])})


fetch("https://dummyjson.com/products")
.then(read=>read.json())
.then(read=>{console.log(read)})