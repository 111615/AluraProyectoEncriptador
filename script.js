// a - ai 
// e - enter 
// i - imes 
// o - ober 
// u - ufat 

function encriptar() { 
 var texto = document.getElementById("inputTexto").value;

//i es para que afecte tanto mayusculas como minusculas  e E
//g es para toda linea u oracion     
//m es para a multiples lneas o parrafos
var txtCifrado = texto.replace(/e/gi,"enter");
var txtCifrado = txtCifrado.replace(/o/gi,"ober");
var txtCifrado = txtCifrado.replace(/i/gi,"imes");
var txtCifrado = txtCifrado.replace(/a/gi,"ai");
var txtCifrado = txtCifrado.replace(/u/gi,"ufat");

//document.getElementById("imgDer").style.display = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("texto2").innerHTML = txtCifrado;
//document.getElementById("copiar").style.display = show;
//document.getElementById("texto2").style.display = inherit;
}

function desencriptar() { 
    var texto = document.getElementById("inputTexto").value;
   //i es para que afecte tanto mayusculas como minusculas  e E
   //g es para toda linea u oracion     
   //m es para a multiples lneas o parrafos
   var txtCifrado = texto.replace(/enter/gi,"e")
   var txtCifrado = txtCifrado.replace(/ober/gi,"o")
   var txtCifrado = txtCifrado.replace(/imes/gi,"i")
   var txtCifrado = txtCifrado.replace(/ai/gi,"a")
   var txtCifrado = txtCifrado.replace(/ufat/gi,"u")
   
 //  document.getElementById("imgDer").style.display = "none";
   document.getElementById("texto").style.display = "none";
   document.getElementById("texto2").innerHTML = txtCifrado;
   //document.getElementById("copiar").style.display = show;
   //document.getElementById("texto2").style.display = inherit;
   }
   function copy() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copio!");
   }
