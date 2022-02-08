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
// 1) variable can be declared

var a = 100;
console.log(a);

var a = "Hello";
console.log(a);

//let keyword is used
let l = 100;
console.log(a);

// let l = "Hello"; //SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// while using let we can reinitiate but we can not re-declare
l = "Hello";
console.log(l);
