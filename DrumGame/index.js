var i=0;
while(i<7){
  var array= document.querySelectorAll(".drum");
  array[i].addEventListener("click",function(){
    var charr= this.innerHTML;
    if(charr=='w'){
      var audio=  new Audio("sounds/kick-bass.mp3");
      audio.play();
      animated(charr);
    }else if(charr=='a'){
      var audio=  new Audio("sounds/snare.mp3");
      audio.play();
      animated(charr);
    }else if (charr=='s') {
      var audio=  new Audio("sounds/crash.mp3");
      audio.play();
      animated(charr);
    }else if (charr=='d') {
      var audio=  new Audio("sounds/tom-1.mp3");
      audio.play();
      animated(charr);
    }else if (charr=='j') {
      var audio=  new Audio("sounds/tom-2.mp3");
      audio.play();
      animated(charr);
    }else if (charr=='k') {
      var audio=  new Audio("sounds/tom-3.mp3");
      audio.play();
      animated(charr);
    }else if (charr=='l') {
      var audio=  new Audio("sounds/tom-4.mp3");
      audio.play();
      animated(charr);
    }
    //var audio=  new Audio("sounds/kick-bass.mp3");
    //audio.play();
  });
    i++;
  }
document.addEventListener("keydown",function(event){
  switch(event.key){
    case 'w':  var audio=  new Audio("sounds/kick-bass.mp3");
      audio.play();animated(event.key);break;
  }
})

function animated(toBeAnimated){
  var button= document.querySelector("."+ toBeAnimated);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed")
  }, 100);
}
