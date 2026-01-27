let arr=[1,2,3,4,5,6,7,8,9,10]

let x=arr.filter((num)=> num>4)
console.log(x)

let y= arr.forEach((num)=> { 
    if (num>4)
        console.log(num)
})
console.log(y)

// therefore , using filter is better than using foreach 

//to bring changes to the valuses use map 

let z= arr.map((num)=>num+4)
console.log(z)

let arr2=[1,2]
let a=arr2.map((num)=>num+1).map((num)=>num+1).filter((num)=>num>3)
console.log(a)