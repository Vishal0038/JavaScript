let pro=new Promise((resolve,reject)=>{
    // resolve("I am resolve")
    reject("hi i am reject")
})
// if resolve is true,then data is printed(resolve uses 'then')

pro.then(data=>{console.log(data)})

// if resolve is false,then err is printed(reject uses 'catch')

.catch(err=>console.log(err))