//js bom
// timing events methods
// seTimeOut() set Interval()

// setTimeout(()=> {
//     console.log('Hi');
// },3000)

// setTimeout(display,2000);
// function display(){
//     console.log('displayFunction');
// }

//  const saveButton=document.querySelector(".saveButton");
//  const message=document.querySelector(".message");

// saveButton.addEventListener('click',saveUser);
// function saveUser(){
//     message.textContent="user registration succesful";
//     setTimeout(()=>{
//         message.textContent="";

//     },2000);

// }



const saveButton=document.querySelector(".saveButton");
const message=document.querySelector(".message");

saveButton.addEventListener('click',displayCount);


function displayCount(){
    let count =1;
    message.textContent=count;

    setInterval(()=>{
        count++;
        message.textContent=count;
    },2000);
}














