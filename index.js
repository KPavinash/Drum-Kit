var numOfButtons = document.querySelectorAll(".drum").length ;

for( var i=0; i<numOfButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () 
    {
        const audioElement = new Audio("sounds/crash.mp3");
        audioElement.play();
    }
);
}

// function playMusic(){
//     const audioElement = new Audio("sounds/crash.mp3");
// //     audioElement.play();
// }