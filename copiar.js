function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}



// version anterior (funciona)

//var botoncopiar = document.querySelector(".btn-copiar");
//var copiaresultado = document.querySelector(".texto-resultado");

//botoncopiar.onclick = copiar;


//function copiar(){ 

  //  navigator.clipboard.writeText(copiaresultado.innerHTML);
//}


