console.log(1=="1")
console.log(1==="1")
//====Datatypes
let name;
console.log(name)
let Name=null
console.log(Name)

let string="hello"
console.log(string)
let number=10
console.log(number)

let frts=true
console.log(frts)

let Exarray=[1,2,3,45,6,7,89]
console.log(Exarray)
let Exobj={
    name:"suma",
    id:101,
    salary:1000
}
console.log(Exobj)
//====Array Methods===

let fruits=["apple","banana","mango","grapes"]
console.log(fruits.push("orange"),fruits) 
let Exfrt=["apple","banana","mango"]
console.log(Exfrt.pop("mango"),Exfrt)
let books=["english","hindhi","telugu"]
console.log(books.unshift("social"),books)
let Exbooks=["english","hindhi"]
console.log(Exbooks.shift("hindhi"),Exbooks)
let nums =[1,2,3,4,5,6,7,8,10]
let exnums=nums.filter((e)=>{

 return e%2===0
})
console.log(exnums)
let emp=[
    {name:"suma", id:2,salary:1000},
    {name:"madhu",id:3,salary:2000},
    {name:"rama",id:4, salary:3000}
]
let exemp=emp.map((v)=>{

    return v.salary
})

console.log(exemp)

let Exforeach=["rama","geetha","padhma","suma"]
let ex=Exforeach.forEach((e)=>{
    console.log( ")",e)

})

let Exjoin=["banana","apple","grape"]
console.log(Exjoin.join("#"),Exjoin)
let exnumbs=[1,2,3,4,5]
let strings=["hello","hi"]
let combained=exnumbs.concat(strings)
console.log(combained)

//==string methods===

 let str="hello"
console.log(str.toUpperCase())
let str1="WELLCOME"
console.log(str1.toLowerCase())
let str2=["banana","apple","mango"]
console.log(str2.includes("apple"))
let str3="wellcome"
console.log(str3.charAt("1"))
let str4=["tamato","onion","mirchi"]
console.log(str4.indexOf("mirchi"))
let str5=["hello   "]
console.log(str5[0].trimEnd())
let str6 ="wellcome"
console.log(str6.replace("o","a"))
//===function====
function WithParam(a,b){
    return a+b;
}
let Exwithparam=WithParam(1,2)
console.log(Exwithparam)

function withoutParamWithOutReturn(){
    console.log("this js class")

}
withoutParamWithOutReturn()

function withReturn(){
    return "hello dear"
}
let Exwithreturn=withReturn()
console.log(Exwithreturn)
//====oprators===

let a=10,b=20,c=30
function Exoprators(){
    if(a>b){
        console.log("a number greaterthan b number")

    }else if(a===b){
        console.log("both numbers are equal")

    }else if(b>c&&c===a){
        console.log("this both numbers are equal")

    }else{
        console.log("all are wrong")
    }

}
Exoprators()


//===loops====


for (let i = 1; i <= 5; i++) {
    console.log("hi");
}


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10];

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);  
    }
}

let arr2 = [1, 23, 4, 5, 6, 7, 8, 10];
for (i=1;i<10;i++ ){
    if(i%2!==0){
        console.log(i)

    }

}

let arr3 = [-20, 30, -40, 50, -51, -63, 67, 60];
let postive = 2;

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > postive) {
        console.log(arr3[i]);  
    }
}
let arr5=[1,2,3,4,5,6,7,8,9,10]
for(let i=2;i<=10;i++){
    if(i%2!==0){
        console.log(i)

    }
}

//====swicth=======

function Exswicth(day){
    switch(day){
        case "sunday":
            return "today sunday";
            case "moday":
                return "today monday";
                case "thuesday":
                    return "today thuesday";
                    case "thursday":
                        return "today thuersday";

                        default:
                        return "invalid day"
    }
} 
//console.log(Exswicth("thursday"))
console.log(Exswicth())

let arr6=[1,2,3,-4,5,-6,7,-8,9,-10]
let negtive=0
for(let i=1;i<=arr6.length;i++){
    if(arr6[i]<negtive){
        console.log(arr6[i])

    }

}
let arr7=[1,-2,3,-4,5,-6,7,-8,9,-10]
let postivenumbers=2
for(let i=3;i<arr7.length;i++){
    if(arr7[i]>postivenumbers){
        console.log(arr7[i])
    }

}


let numbers = [10, 20, 30, 40, 50, 60,2];
let bignum = 0; 


for (let i = 0; i < numbers.length; i++) { 
    
    if (numbers[i] > bignum) {
        bignum = numbers[i]; 
    }
}

console.log(bignum); 


let Numbers = [10, 20, 30, 40, 50, 60];
let smallnumbers = Numbers[0]; 


for (let i = 1; i < Numbers.length; i++) { 
    
    if (Numbers[i] < smallnumbers) {
        smallnumbers = Numbers[i]; 
        
    }
}

console.log(smallnumbers); 



let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > 5) { 
        console.log(Arr[i]); 
    }
}
