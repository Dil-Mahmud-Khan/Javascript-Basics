// console.clear();
// console.log(window.location);
// //
// console.log(location.href);
// // protocol
// console.log(location.protocol);

// //hostbame
// console.log(location.hostname);

// //port
// console.log(location.port);

// //path
// console.log(location.pathname);

console.clear();
var locationdiv =document.querySelector(".locationDiv");

var p1=locationdiv.children[0];
p1.textContent=location.href;


var p2=locationdiv.children[1];
p2.textContent=location.hostname;

var p3=locationdiv.children[2];
p3.textContent=location.protocol;

var p4=locationdiv.children[3];
p4.textContent=location.port;

var p5=locationdiv.children[4];
p5.textContent=location.pathname;


const visitButton=document.getElementById('visit');
visitButton.addEventListener("click",function(){
    location.assign("https://www.google.com");
});
