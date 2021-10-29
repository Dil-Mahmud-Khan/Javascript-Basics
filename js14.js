/* for loop
var m= parseInt(prompt("Enter the starting number"));
var n= parseInt( prompt("Enter the last number"));


var sum=0;
for(var x=m;x<=n;x++){
    sum=sum+x;
}
document.write(sum);
*/ 

/*while loop

var i=1;
var sum=0;
while(i<=20){
    if(i%3==0 && i%5==0){
        sum=sum+i;
    }
    i++;
}
document.write(sum);
*/


/*do while loop

var i=1;
do{
    document.write(" "+i);
    i++;
}
while (i<=10);
*/


/*break and continue

for(var i=1; i<=100; i++){
    if(i%2!=0){
        continue;
    }
    document.write(" "+i);
}
*/



//ternary operator

/*
var number= Number(prompt("Enter a number: "));

if(number>0){
    console.log("Positive");
}
else{
    console.log("Negative")
}
*/
/*
var number= Number(prompt("Enter a number: "));

  var result =number>0 ? "Positive" : number<0 ? "Negative": "Zero"
 console.log(result);

*/




/* traditional function

function square(num1, num2){

    var result= num1*num2;
    document.write("Result : " +result +"</br>");

}
//calling function
square(5,6);

//addition function
 function addition(num1, num2){
     var result=num1+ num2; 
     document.write(" Sum :"+result +"<br>");

 }
 addition(30,20);


*/


// IIFEs
/*
(function display(message){
    console.log(message);

}) ("Dil Mahmud Khan");


//funcion expression 
 const display2=function displayMessage(){
    console.log("hey this is dil");
}
display2();

*/


/*array


var names =  new Array(5);
//var names=["Dil", "Mahmud","Khan","Snake","viper"];   //we can also use this approach
names[0]="Dil";
names[1]="Mahmud";
names[2]="Khan";
names[3]=" Snake";
names[4]="viper";

console.log(names[4]);

console.log("The length of this array is : "+names.length);

names.push("sokina");
console.log(names);

names.pop();
console.log(names);


//concatenation
var country1=["India","nepal"];
var country2=["swis", "barcelona"];

var country=country1.concat(country2);
console.log(country);

*/




/* loop in the array

/*
var num=[10,20,30,40,50];
var sum=0;
for(var i=0;i<5;i++){
    console.log(num[i]);
    sum=sum+num[i];
}
console.log("SUM: "+sum);

//this is alternative in below

var num=new Array();
for(var i=0;i<5;i++){
    num[i]=parseInt( prompt("Enter number"));
}

var sum=0;
for(var i=0;i<5;i++){
    console.log(num[i]);
    sum=sum+num[i];
}
console.log("Sum is : "+ sum);


*/



/*array methods


//var names=["dil","mahmud","khan"];
//console.log(names);

//shift is the oppositive of pop
//names.shift();
//console.log(names);

//unshift is opposite of push
//names.unshift();
//console.log("kamla")

//names.splice(2,0,"karim","rahim");
//console.log(names);

// var newArray=names.slice(1);
// console.log(newArray);

//var sortNames= names.sort();
//names.reverse();
//console.log(sortNames);

var number=[23,234,34,23,22];
number.sort(function(a,b){
    return a-b;
});
console.log(number);

*/



//One dimentional array
/*
function highestScore(scorees){
    let max= scores[0];
    for(var i=1;i<scores.length;i++){
        if(max<scores[i]){
            max=scores[i];
        }
    }
    return max;
}
let scores = [23,345,65,32,87];
var maxScore=highestScore(scores);
console.log(maxScore);

*/



// 2D array
/*


function higestRunScorer(playersInfo){

    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for(var i=1;i<playersInfo.length;i++){
        if(highestScore<playersInfo[i][1]){
            highestScore=playersInfo[i][1];
            highestScorer=playersInfo[i][0];
        }
    }
    return highestScorer;

}

var playersInfo= [
 ["ashraful",84],
 ["musfiq",24],
 ["sakib",34],
 ["masrafe",45],
 ["dil",74],
 ];

 var name=higestRunScorer(playersInfo);

console.log(name);

*/



//Object,constructor
//adding function in constructor


function Student(name,age,cgpa,languages){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.languages=languages;

    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.languages);
       
    }
}

var student1= new Student("dil",21,3.3,["bangla","English"]);
var student2= new Student("mahmud",41,3.5,["bangla","English"]);
var student3= new Student("khan",24,3.3,["bangla","English"]);


student1.display();
student2.display();
student3.display();






