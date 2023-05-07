a - ai 
e - enter 
i - imes 
o - ober 
u - ufat 

function Encriptar() { 
 var texto = document.getElementById("inputTexto").value.tolowerCase();

//i es para que afecte tanto mayusculas como minusculas  e E
//g es para toda linea u oracion     
//m es para a multiples lneas o parrafos
}
var txtCifrado = texto.replace(/e/img, "enter")
var txtCifrado = txtCifrado.replace(/o/img, "ober")
var txtCifrado = txtCifrado.replace(/i/img, "imes")
var txtCifrado = txtCifrado.replace(/a/img, "ai")
var txtCifrado = txtCifrado.replace(/u/img, "ufat")