window.addEventListener('load', inicio, false);

var texto, caracter, texto_nuevo = " ";
var blob;


function inicio() {
    document.getElementById('archivo').addEventListener('change', cargar, false); 
    document.getElementById('archivo').addEventListener('change', leer_texto, false);             
}

function cargar(ev) {
    document.getElementById('datos').innerHTML='Nombre del archivo:'+ev.target.files[0].name+'<br>'+
                                               'Tamaño del archivo:'+ev.target.files[0].size+'<br>'+  
                                               'Tipo MIME:'+ev.target.files[0].type;
    var arch=new FileReader();
    arch.addEventListener('load',leer,false);
    arch.readAsText(ev.target.files[0]);
}

function leer(ev) {
    document.getElementById('lectura').value=ev.target.result;
}

//const texto = "hola";

function leer_texto(ev){
    var arch = new FileReader();
    arch.addEventListener('load', leer2, false);
    arch.readAsText(ev.target.files[0]);
}

function leer2(ev) {
    var des = document.getElementById("recorrimiento").value;
    document.getElementById('cifrado').value=ev.target.result;
    texto = ev.target.result;

    for(var i = 0; i < texto.length; i++){
        caracter = texto.charAt(i);
        caracter = caracter.charCodeAt(0);

        caracter = caracter + des;

        caracter = caracter - 32;
        caracter = String.fromCharCode(caracter);
        alert(caracter);
        //texto_nuevo = texto_nuevo + caracter.toString();
    }

    //caracter = texto.charAt(0);
}


// Function to download data to a file
function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    
    downloadLink.href = url;
    downloadLink.download = fileName;
    
    // Append download link to the DOM and trigger a click to start the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Clean up after the download is complete
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  }

function alerta(){
    //downloadFile(texto, 'ejemplo.txt', 'text/plain');
    var des = document.getElementById("recorrimiento").value;
    alert(des);
}