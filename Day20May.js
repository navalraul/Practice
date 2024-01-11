// let, const, var, hoisting, closure
// function hoisting(){
//     console.log(studentName,"studentName here")
//     var studentName = "Swaraj"
// }
// hoisting();
// var 
// let
// const

// Hoisting

// var sname;
// var sname = "Naval"
// console.log(sname)

// let lname = "let";
// let lname = "let";
// console.log(lname)

// const cname = "cname";
// cname = "cname";
// console.log(cname);


//         Re-assign                       Hoisting                            Re-declaration
// Let- reassign the value                 hoisting not applicable             re-declaration is not possible
// const - cant reassign the value         hoisting not applicable             re-declaration is not possible
// var - reassign the value.               hoisting applicable                 re-declaration possible


// closure - inner function can access outer function scope - Lexical scoping , its remember the scope

// function outerFunction() {
//     var myName = 'Awdiz';
//     console.log(myName)

//     function innerFunction (){
//         var mySurname= "Institute"
//         console.log(mySurname)
//         console.log(myName)
//     }
//     return innerFunction ();
// }
// var myFunc = outerFunction ; //[function : innerFunction]
// console.log(myFunc())


// let a = 10;
// let b = 4;

// console.log("a++",a++)
// console.log("a++",a++)
// console.log("++a",++a)
// console.log("a--",a--)
// console.log("a--",a--)
// console.log("--a",--a)

var n =2;
function square (num) {
    var ans = num*num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);