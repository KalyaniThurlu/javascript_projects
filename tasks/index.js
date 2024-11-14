

//task1
//Find the Missing Number in an Array
//Problem: You are given an array of numbers from 1 to n with one number missing. Find the missing number.
//Example Input: [1, 2, 3, 5], n = 5
//Logic:
//The sum of the first n natural numbers is n * (n + 1) / 2.
//Subtract the sum of the array elements from this sum to find the missing number.



function missingNumber(arr,n){
    const num= (n*(n+1)/2)

    const numbers=arr.reduce((sum,num)=>sum+num,0)
    return num-numbers
}
const arr=[1,2,4,5]
const n=5
console.log(missingNumber(arr,n))

//task:2 
//Given a string, reverse the string without using the built-in reverse() method.
//Example Input: "hello"
//Logic: You can reverse the string by iterating over it from the end to the start and constructing the reversed string.


function  reverseString(str){
    let string="";
    for(let i=str.length-1; i>=0;i--){
        string += str[i]


    }
    return string

}
const input="hello";
const output=reverseString(input);
console.log(output);

//task:3
//Merge Sorted Arrays
//Problem: Given two sorted arrays, merge them into one sorted array.
//Example:
//Input: nums1 = [1, 3, 5], nums2 = [2, 4, 6]
//Output: [1, 2, 3, 4, 5, 6]
//Skills: Arrays, sorting, and merging techniques.

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let combained=arr1.concat(arr2);
combained.sort((a, b)=>a - b);
console.log(combained);