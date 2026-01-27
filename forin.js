//used for objects 
let obj={"name":"janvi","class":12}
for (let i in obj)
    console.log(i,":",obj[i])

// for arrays 
let arr=["h","w","o"]
for(let i in arr)
    console.log(i)       // we get the indices of the arrays elements 

//we use foreach for arrays too 
arr.forEach(function print(){console.log("hello world")})