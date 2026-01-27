//ways of defining an array
arr1=[1,2,3,4]
const arr2=['hello','world']
const arr3= new Array(23,34,56,23)
console.table([arr1,arr2,arr3])


//note - shallow copy - js like heap 
//deep copy- like stack .....(no refernce, only copy of object)

//push and pop 
arr1. push(5)
console.log(arr1)
arr1.pop()
console.log(arr1)

//includes and indexof
console.log(arr1.includes(1))
console.log(arr1.includes(10))          //boolean value

console.log(arr1.indexOf(1))
console.log(arr1.indexOf(10))

//converting an array into string 
const arr= [1,2,3]
const newarr=arr.join()
console.table([arr,newarr, typeof arr, typeof newarr])

// slice and splice

const ar= [2,4,6,8,10]
console.log(ar)
console.log(ar.slice(1,3))               //doesnt modify the og array 
console.log (ar)                
console.log(ar.splice(1,3))             // changes the og array and also includes the last index 
console.log(ar)