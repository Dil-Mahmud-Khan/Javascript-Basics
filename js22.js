var myVar=document.querySelector("h1");
myVar.addEventListener("mouseover",function(){
    myVar.classList.add("myStyle");
});


myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("myStyle");
});


// document.querySelector("button").addEventListener("click",function(){
//     alert("hello");
// });



// function myFunction(){
//     alert("Hello");
// }