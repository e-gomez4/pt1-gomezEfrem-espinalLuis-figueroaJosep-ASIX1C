function toggleTheme(){
    var body = document.body;
   body.classList.toggle("oscuro")

   var claro = document.getElementById("claro");
   var oscuro = document.getElementById("oscuro");
    
   if (body.classList.contains("oscuro")){
    claro.style.display="inline";
    oscuro.style.display="none";
   }else{
    claro.style.display="none";
    oscuro.style.display="inline";
   }
}