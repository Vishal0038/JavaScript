const obj=[{name:"Vishwa",phone:9629102110,age:22,gender:"male"},
            {name:"Barani",phone:7932752921,age:32,gender:"male"},
            {name:"Magi",phone:9042079324,age:21,gender:"female"},
            {name:"Ilamaran",phone:8531075739,age:24,gender:"male"},
            {name:"Varun",phone:9786300499,age:18,gender:"male"}]

for(let a of obj){
    if(a.gender=='male'){
        console.log(a.name)
    }
}

