//alert("error 404");

// function deleteSome(){
//   let value=  confirm(" are you sure about this??");
//   if(value){
//       console.log("Deleted");
//   }
//   else{
//       console.log("not deleted");

//   }
// }
// deleteSome();

function welcomeMessage(){
    var h1=document.createElement('h1');
    let text;
   var name= prompt("Enter your name: ");
   if(name==null ||  name==''){
       text='no name found'
       
   }
   else{
       text="Welcome my boss "+name;
   }

   var textNode=document.createTextNode(text);
   h1.appendChild(textNode);
   document.body.appendChild(h1);
}

welcomeMessage();

