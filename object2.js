//merging 2 objects
const obj1={1:"hello"}
const obj2={2:"world"}
const obj3={obj1,obj2}
console.log(obj3)

const objj= Object.assign({},obj1,obj2)    // right way to merge ...writing {} ensures that they get merged 
console.log(objj)

const obj= Object.assign(obj1,obj2)     // if no {} the obj=obj1 
console.table([obj,obj1,obj2])

//another way of merging 
const objjjj={"hi":"bye"}
const obj4={...objjjj,...obj2}
console.log(obj4)

// getting keys and valus 
console.log(Object.keys(obj4))     // return type is list 

// to check if a key exists in the object 
console.log(obj4.hasOwnProperty("fuckk"))     // true or false 