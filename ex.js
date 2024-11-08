var a=10;
var b="10"
console.log(a==b)
console.log(a===b)

var c=10
var d="10"
console.log(c==d)
console.log(c===d)
 
const person={
    name:"suma",
    sayName:function(){
        console.log(`myName is ${this.name}`)
    }
}
person.sayName()