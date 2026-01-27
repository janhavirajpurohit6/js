function addn(a,b){
    console.log(a+b)
}

addn(2,3)
addn(2,"s")

const x= addn(5,5)
console.log(x)       //undefined 

function print(username){
    if(username==undefined)             //or if(undefined) of if(!username)
        return ("pls enter a username")
    return `${username} is the name`
}

print("janvi")    // no output ...ccuz fxn m return ...and that shud be stored in a variable 

const y= print()
console.log(y)

console.log("\n")
// when we dk how many arguemnets we want ...use "..."
function fxn(val1,val2,...nums)
{
    console.log(nums)
}

fxn(23,24,25,26,27)