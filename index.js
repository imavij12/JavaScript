{
// starting JavaScript
// var let const

//variable decleration
// var a //int, string, float, ?
var a; //can be of any datatype depending upon type of variable stored
a=10; //assigned number
console.log(a); //console.log() helps in printing value of a

//typeof operator tells us about the type of data stored in a variable
console.log(typeof a); //

a = "Hello" //re-initializing
console.log(a)
console.log(typeof a)   //can be written even without semicolon ';'

a = true
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

//numbers
var num = 10;
console.log(num);
var float = 2.4;
console.log(float);

//boolean
var t = true;
var f = false;
console.log(t);
console.log(f);

//string
//single quotes, double quotes, back tick
//'',  "",  ``
var str = 'hi'
console.log(typeof str);
var joey = "How you doin?\nI m fine, what about you?"
console.log(joey);

// use case of ``
var b = `Thats Great
Hope you are grasping the concept`
console.log(b);

//${} in backticks is used to denote variables and compute inside strings
var num = 3;
console.log(`Half of ${num} is ${num/2}`);


//var has som problems
// 1) variable can be re-declared

var a = 100;
console.log(a);

var a = "Hello";
console.log(a);

//let keyword is used
let l = 10;
console.log(l);

// let l = "Hello"; //SyntaxError: Identifier 'a' has already been declared
// console.log(l);

// while using let we can reinitiate but we can not re-declare
l = "Hello";
console.log(l);

//const keyword is used
const n = 2;
console.log(n);

// neither redeclare nor re-initialize
// const n=5;
n=4; //TypeError: Assignment to constant variable.
console.log("hey");



 //loops in JS
 var num = 10;

 // for (var i = 0; i < num; i++){
 //     if (i % 2 == 0) {
 //         console.log("num is even");
 //     }
 // }

 // 2nd problem with var keyword
 // var keyword is function scoped in case of function else it is global scope
 // let keyword is block scoped

 let j = 20;
 for (var i = 0; i < num; i++) {
   let j = 20;
   if (i % 2 == 0) {
     let hello = 1000;
     console.log(i);
     console.log(hello);
   }

   console.log("inner" + j);
 }
 console.log("outer " + j);
 console.log(`value of i is " ${i}`);
 //console.log(hello); // error dega hello is not defined

 // {

 //     //this space between opening and closing of curly braces is a block
 // }


 let a1 = 10;
 for (var i = 0; i <= 0; i++) {
   console.log(`i=${i}`);
   console.log(a1);
   let a1 = 90;
   console.log(a1);
 } //Sir iss code me error bol raha a1 needs to initialized first. WHY??
}
