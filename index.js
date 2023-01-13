var numOfButtons = document.querySelectorAll(".drum").length ;

for( var i=0; i<numOfButtons; i++){
  
document.querySelectorAll(".drum")[i].addEventListener("click", function () 
    {

        var inputButton = this.id;
        switch(inputButton){
        case '1'  : 
             var audioElement1 = new Audio("sounds/crash.mp3");
             audioElement1.play();
            break;

            case '2' : 
            var audioElement2 = new Audio("sounds/kick-bass.mp3");
            audioElement2.play();
            break;

            case '3' : 
            var audioElement3 = new Audio("sounds/snare.mp3");
            audioElement3.play();
            break;

            case '4' : 
            var audioElement4 = new Audio("sounds/tom-1.mp3");
            audioElement4.play();
            break;

            case '5' : 
            var audioElement5 = new Audio("sounds/tom-2.mp3");
            audioElement5.play();
            break;

            case '6' : 
            var audioElement6 = new Audio("sounds/tom-3.mp3");
            audioElement6.play();
            break;

            case '7' : 
            var audioElement7 = new Audio("sounds/tom-4.mp3");
            audioElement7.play();
            break;
                           
            default: null;
        }

    }
);
}

document.addEventListener("keydown", function keyChecker(event)
{
let keyPressed = event.key;
switch(keyPressed){
    case 'w'  : 
         var audioElementW = new Audio("sounds/crash.mp3");
         audioElementW.play();
        break;

        case 'a' : 
        var audioElementA = new Audio("sounds/kick-bass.mp3");
        audioElementA.play();
        break;

        case 's' : 
        var audioElementS = new Audio("sounds/snare.mp3");
        audioElementS.play();
        break;

        case 'd' : 
        var audioElementD = new Audio("sounds/tom-1.mp3");
        audioElementD.play();
        break;

        case 'j' : 
        var audioElementJ = new Audio("sounds/tom-2.mp3");
        audioElementJ.play();
        break;

        case 'k' : 
        var audioElementK = new Audio("sounds/tom-3.mp3");
        audioElementK.play();
        break;

        case 'i' : 
        var audioElementI = new Audio("sounds/tom-4.mp3");
        audioElementI.play();
        break;
                       
        default: null;
    }

}
);







