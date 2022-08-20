const inputTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return stringEncriptada;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}





//var botonEncriptar = document.querySelector(".btn-encriptar");
//var resultado = document.querySelector(".texto-resultado");
//var area= document.querySelector(".area");


//botonEncriptar.onclick = desencriptar;

//function encriptar(){
  //  var area = recuperarTexto()
   //resultado.textContent = desencriptarTexto(area);
  //}

 //function recuperarTexto(){
   //var texto = area.value;
   //resultado.textContent = desencriptarTexto(texto);
  //}

  //function desencriptarTexto(mensaje){
    //var texto = mensaje;
    //var textoFinal ="";

//for(var i = 0; i < texto.length; i++){
  //if(texto[i] == "a"){
    //  textoFinal = textoFinal + "ai"
    //}

//if(texto[i] == "e"){ 
  //    textoFinal = textoFinal + "enter"
   //}

 //if(texto[i] == "i"){ 
   // textoFinal = textoFinal + "imes"
//     }

 // if(texto[i] == "o"){
   // textoFinal = textoFinal + "ober"      
    //}
  
 //if(texto[i] == "u"){
   // textoFinal = textoFinal + "ufat"
//     }

 //else{
   // textoFinal = textoFinal + texto [i];
  //}
//}

//return textoFinal;
//}


