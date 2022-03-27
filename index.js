var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keydown",event=>{
  makeSound(event.key);
  buttonAnimation(event.key);
})
function makeSound(key){
  switch(key){
    case 'w':
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case 'a':
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case 's':
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case 'd':
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case 'j':
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case 'k':
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case 'l':
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case 'W':
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case 'A':
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case 'S':
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case 'D':
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case 'J':
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case 'K':
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case 'L':
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    default:;
  }
}
function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100);
}
