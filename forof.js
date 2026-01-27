//using for of for arrays 
let arr=[1,2,3,4]
for (let i of arr){
    console.log(i)
}
console.log("\n")

//for string 

let str="hello world"
for(let i of str)
    console.log(i)

/*for maps -- maps is js like obj
ect ( but every key is unique and always in order)*/

let mapp=new Map([["name","janvi"],["class", 12]])

for( const [i] of mapp)
   { console.log(i)}

console.log("\n")
for( const i of mapp)
   { console.log(i)}

for( const [i,j] of mapp)
   { console.log(i,"=",j)}


//note - for of cananot be used for objects . 
//for objects we use for in 