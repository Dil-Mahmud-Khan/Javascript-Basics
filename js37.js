// function studentInfo(name,age){
//     return {
//         name,
//         age
//     }
// }
// console.log(studentInfo("DIL",22));

// let message={
//     body (){
//         return `hi i am return function`
//     }
// }
// console.log(message.body());




//for of    for in


// const names= ["s1","s2","s3"]
// for (let name of names){
//     console.log( name)

// }


// let students ={
//     name: "dil ",
//     ID: 101,
//     cgpa: 3.66
// }

// for (let x in students){
//     console.log(students[x]);
//     console.log(`${x}: ${students[x]}`);
// }



//for each


// var number =[10,20,34,37,33];


// number.forEach(function(x){
//     console.log(x);  

// })

var numbers=[12,344,23,44,26,23];
var squarNumbers=[];
numbers.forEach(function(x){
    squarNumbers.push(x*x);
})
console.log(squareNumbers);