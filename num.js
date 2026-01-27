console.log(Math.ceil(4.2))
console.log(Math.abs(-4)) 
console.log(Math.random())       // always between 0 to 1

let x= new Number(2)
console.log(typeof 2) //Number is a primitive datatype 

let y = new Date()
console.table([typeof y, y])     // not a primitive datatype ..type=object
console.log(y) 
const newdate=new Date(2003,0,23)
const newdatee=new Date("2003-01-23")
const datee=Date.now()
console.table([y.toString(),y.toDateString(),newdate.toDateString(), newdatee.toDateString(),y.getTime(),y.getMonth()+1])