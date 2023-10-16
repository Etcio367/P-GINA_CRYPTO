//-------------------------- Variables globales

var texto = null, caracter, texto_nuevo = "";

//-------------------------- Funciones para cargar archivo

window.addEventListener('load', inicio, false);

function inicio() {
    document.getElementById('archivo').addEventListener('change', cargar, false);           
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
    texto = ev.target.result;
}

//-----------------------Función para descargar archivo

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


  //--------------------- Función para cifrar archivo

function BotonCifrar() {
    var des = document.getElementById("recorrimiento").value;
    des = parseInt(des);

    if(texto === null)
    {
        
        alert("Por favor, primero cargue un archivo");
        return -1;
    }
    else 
    {   if(des > 26 || des < 0)
        {
            alert("Por favor, ingresa un valor mayor a 0 o menor a 26");
            return -1;            
        }
    }

    if(des == 26)
    {
        des = 0;
    }

    for(var i = 0; i < texto.length; i++){

        caracter = texto.charAt(i);                 //Agarra un caracter del texto
        caracter = caracter.charCodeAt(0);          //Vuelve al caracter en número en código ascii
        
        if(caracter < 97 || caracter > 122 ){
            continue;
        }
        else
        {
            caracter = caracter + des;

            if(caracter > 122)
            {
                caracter = caracter - 26;
            }

            caracter = caracter - 32;                   //Vuelve al caracter en mayusculas
            caracter = String.fromCharCode(caracter);
            texto_nuevo = texto_nuevo + caracter;
            caracter = null;
        }
    }
    
    document.getElementById('cifrado').value= texto_nuevo;
    downloadFile(texto_nuevo, 'mensaje_c.txt', 'text/plain');
    alert(texto_nuevo);
    texto_nuevo = "";
}


   //--------------------- Función para descifrar archivo

   function BotonDescifrar()
   {
        var des = document.getElementById("recorrimiento").value;
        des = parseInt(des);

        if(texto === null)
        {
            
            alert("Por favor, primero cargue un archivo");
            return -1;
        }
        else 
        {   if(des > 26 || des < 0)
            {
                alert("Por favor, ingresa un valor mayor a 0 o menor a 26");
                return -1;            
            }
        }

        if(des == 26)
        {
            des = 0;
        }


        for(var i = 0; i < texto.length; i++){
        
            caracter = texto.charAt(i);                 //Agarra un caracter del texto
            caracter = caracter.charCodeAt(0);          //Vuelve al caracter en número en código ascii 

            if(caracter < 65 || caracter > 90 ){
                continue;
            }
            else
            {
                caracter = caracter - des;

                if(caracter < 65)
                {
                    caracter = caracter + 26;
                }

                caracter = caracter + 32;                   //Vuelve al caracter en mayusculas
                caracter = String.fromCharCode(caracter);
                texto_nuevo = texto_nuevo + caracter;
                caracter = null;
            }    
        }
        
        document.getElementById('cifrado').value = texto_nuevo;
        downloadFile(texto_nuevo, 'mensaje_c_d.txt', 'text/plain');
    }