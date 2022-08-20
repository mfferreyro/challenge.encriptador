function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for(let i = 0; i < matrizCodigo.length; i++){
      if(stringDesencriptada.includes(matrizCodigo[i][0])){
          stringDesencriptada = stringDesencriptada.replaceAll
          (matrizCodigo[i][1],matrizCodigo[i][0])
      }

  }
  return stringDesencriptada;
}

function btnDesencriptar(){
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensaje.value = textoDesencriptado;
  inputTexto.value = "";
}


//version anterior. Funciona

//var botonDesencriptar = document.querySelector(".btn-desencriptar");
//var resultado = document.querySelector(".texto-resultado");
//var area= document.querySelector(".area");


//botonDesencriptar.onclick = desencriptar;

//function desencriptar(){
  //  var area = recuperarTexto()
   //resultado.textContent = desencriptarTexto(area);
  //}

// function recuperarTexto(){
  // var texto = area.value;
   //resultado.textContent = desencriptarTexto(texto);
  //}

  //function desencriptarTexto(mensaje){
    //var texto = mensaje;
    //var textoFinal ="";

//for(var i = 0; i < texto.length; i++){
  //if(texto[i] == "a"){
    //  textoFinal = textoFinal + "a"
      //i = i+1;
  //}

  //else if(texto[i] == "e"){ 
    //  textoFinal = textoFinal + "e"
      //i = i+4;
  //}

//  else if(texto[i] == "i"){ 
  //  textoFinal = textoFinal + "i"
    //i = i+3;
   //}

  //else if(texto[i] == "o"){
    //textoFinal = textoFinal + "o"      
    //i= i+3; 
   //}
  
  //else if(texto[i] == "u"){
    //textoFinal = textoFinal + "u"
    //i=i+3;
  //}

 //else{
   // textoFinal = textoFinal + texto [i];
  //}
//}

//return textoFinal;
//}


