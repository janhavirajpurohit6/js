//merging 2 arrays 
const arr1= [1,2,3]
const arr2=[4,5,6]
arr1.push(arr2)
console.log(arr1)     // gon take the second array as an elemnt ....wrong way 

//to solve the issue above 
const newarr=arr1.flat()
console.log(newarr)

// best way to merge 
const name1=["henvi","rine"]
const name2 =["helo","world"]
const neww=[...name1,...name2]
console.log(neww)

