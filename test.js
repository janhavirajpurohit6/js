console.log("helloworld");
const x=23
let y= 45
let city="hello"
let state 
console.table([x,y,city,state,"\n"])

//=====================

console.log(typeof "hehe")      //string 
console.log (typeof null)     // object 
console.log(typeof undefined)      //undefined
console.log("\n")

//============================

console.log(1+"2"+3)
console.log("2"+3+4)
console.log(1+2+"3")
console.log("\n")

//=============
console.log("2"==2)  //true 
console.log("2"===2)   //false 
console.log("\n")

//==========
let list=[2,4,5]
const fxn = function()
 {
    console.log("sup");
}
console.log(list)
console.log(typeof fxn)
fxn()

console.log("\n")

//==================
//stack = primitive type ...we get a copy of it 
//heap = non primitive .......we get reference to the original object 
  
let stackeg= "hello"
let stackeg2=stackeg
stackeg2="go"
console.log(stackeg)
console.log(stackeg2)

let heap1= {
    namee:"janvi",
    email:"janvi@ggl.com"
}

let heap2=heap1
heap2.namee="neeraj"

console.log(heap1.namee)
console.log(heap2.namee)

console.log("\n")
 

/*primitive data types :
number 
string 
undefined 
boolean 
null     // typeof null = object tho 
bigint 
symbol


non primitive :-
object -- {abc:hh, dd:j}
list 
Date 
function 
array 
*/
