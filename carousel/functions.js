
var g=10
// function declaration 
function functionName(params) {
   
    
   return g
    
}

const rst=functionName("hi")



console.log(rst)
// function expresstion
const greet=function(name){
    return `hello ${name}`
}
console.log(greet ("Alice"))
const good=function(param){
    return `hi ${param}`
}
console.log(good ('1'))


// arrow functions
const some =(b,c)=>{
    return  b+c
}

results=some(2,3)

console.log(results)



//anonymous 



console.log("start");  


setTimeout(function() {
    console.log("hi");  
}, 2000);

console.log("end"); 

//iife

(function() {
    const message = "hello! world";
    console.log(message);
})();

function greet1(name, callback) {
    console.log("Hello " + name);
    callback();  
    
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet1("Alice", sayGoodbye);

function greet2(name1,callback){
    console.log("hi"+name1)
    callback()
}
function sayGoodbye1(){
    console.log("sayGoodbye1")
}
greet1("madhu", sayGoodbye1)