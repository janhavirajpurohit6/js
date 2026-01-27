const name="janvi"
const email="janvi@gmail.com"
console.log (`hi my name is ${name} and email is ${email}`);   // ` not ' or '' 

let g='hello '
console.log(g.length)
console.log(g.toUpperCase())

let anothername=g.substring(0,3)       //negative values ko 0 consider krega
let a= g.slice(-8,4)



console.table([g,g.replace("h","j"),anothername,a,g.trim()])