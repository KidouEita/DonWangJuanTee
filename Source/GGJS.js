var menuOn = false;


$(document).ready(function () {
    $('#index').keydown(keyListener);
   function keyListener(e) {
       if(e.keyCode==13){
           location.replace("RPG1.html");
           localStorage.clear();   
       }
   }
});