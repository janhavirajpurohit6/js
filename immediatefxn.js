//global scope ke pollution ...koi variale wgera problem ko soleve krne ke liye 
// we use () () 

//example 

(function print(){
    console.log("hello world")
})();                              //semicolon is imp .....if no semicolon then error(if ders more than one funxtion)

//the first parenthesis is for the function and the second one is for execution 

( ()=>{console.log("janvi")})()