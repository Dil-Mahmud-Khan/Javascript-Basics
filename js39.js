// //arrary distruct

// let numbers=[23,434,756,234,445];
// let [num1,num2,...z]=numbers
// console.log(num1);
// console.log(num2);
// console.log(z);

// // swap

// let a=10,b=20;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

//object distructure

// const student={
//     id: 221,
//     fullName:'Dil Mahmud Khan',
//     gpa: 3.00,
//     language:{
//         native:'Bangla',
//         beginner: 'English'
//     }
// }
// const{id,fullName,language}=student
// console.log( id);
// console.log(fullName);
// console.log(language.native);


//destructing function parameter

const studentInfo=({id,fullName})=>{
    console.log(`${id},${fullName}`);

}

const student={
    id: 232,
    fullName:"dil Mahmud Khan"
}
studentInfo(student)