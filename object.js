const obj={name:"janvi",class:9, hobbies:["Play","sing"], "schul":"gems" }
console.table([obj.name,obj["name"],  obj["schul"]])    // 2 ways to get the value of any key 
                                                       // inside [ ] ...the key always in ""
//creating a symbol and the symbol as key 
 
const symb= Symbol("key1")
const obj1= {symb:"hello"}
console.table([obj1.symb, typeof obj1.symb])  //wrong ...we want the type to be symbol and not string 

// correct way 
const symb1=Symbol("key2")
const obj2={[symb1]:"hi"}
console.log(obj2[symb1])
console.log(obj2)         // symbol likha hua hoga  

// to edit a value of some key 
obj.name="neha"
Object.freeze(obj)// wont allow any key ka value to change once frozen 
obj.name="raj"        //useless
console.log(obj)






