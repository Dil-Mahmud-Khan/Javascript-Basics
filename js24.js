for(var i=0;i<3;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text=this.innerHTML;
    console.log(text);
    audioPlay(text);
    
    // switch(text){
    //     case "A":
    //         var audio = new Audio("image/a.mp3");
    //         audio.play();
    //         break;
    //         case "B":
    //             var audio = new Audio("image/b.mp3");
    //             audio.play();
    //             break; 
    //          case "C":
    //             var audio = new Audio("image/c.mp3");
    //             audio.play();
    //             break;  
    // }

    });
}


function audioPlay(text){
       switch(text){
       case "A":
             var audio = new Audio("image/a.mp3");
             audio.play();
             break;
            case "B":
               var audio = new Audio("image/b.mp3");
                 audio.play();
                 break; 
              case "C":
                 var audio = new Audio("image/c.mp3");
                 audio.play();
                 break;  
     }
}