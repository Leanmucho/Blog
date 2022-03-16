let boton = document.getElementById("boton");
let v = document.getElementsByTagName("audio") [0];
let sound = false

boton.addEventListener("click", function(){
    if (!sound) {
      v.play();
      this.innerHTML = "Pause";
      sound = true;
      document.getElementById("imagen").classList.add("App-logo")
     } else {
      v.pause();
      this.innerHTML = "Play";
      sound = false;
      document.getElementById("imagen").classList.remove("App-logo")
     } 
   });
 