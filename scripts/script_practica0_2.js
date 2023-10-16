//-------------------- Variables Globales

var w = [], y = [], z = [];


//-------------------- Función, cifrar

function BotonCifrar(){
    var des = document.getElementById('numeroInput');
    des = parseInt(des.value);

    var imagenInput = document.getElementById('img-input');
    const canvas = document.getElementById('canvas');
    const dosD = canvas.getContext('2d');
    const colores = document.getElementById('color');

    //alert(imagenInput);

    if(des < 0 || des > 255)
    {
        alert("El número ingresado es inválido");
        return -1;
    }

    imagenInput.addEventListener('change', () =>{

        const archivo = imagenInput.files[0];
        const lectura = new FileReader();
        var x=0;

        lectura.onload = (event) => 
        {

            const imagenBMP = new Image();
            imagenBMP.src = event.target.result;

            imagenBMP.onload = () => 
            {
                canvas.width = imagenBMP.width;
                canvas.height = imagenBMP.height;
                dosD.drawImage(imagenBMP,0,0);
    
                const datosImagen = dosD.getImageData(0,0,imagenBMP.width,imagenBMP.height);
                const pixels = datosImagen.data;
                
                const rgbInput = document.getElementById('color');
                rgbInput.innerHTML = '';

                for(let i=0;i<pixels.length; i+=4)
                {
                    var r = pixels[i];
                    var g = pixels[i+1];
                    var b = pixels[i+2];
                    console.log(pixels[i], pixels[i+1], pixels[i+2]);
    
                    const rgbTexto = document.createElement('div');
                    rgbTexto.textContent = `RGB: (${r}, ${g}, ${b})`;
    
                    const conjunto = [r,g,b];
    
                    const muestraResultado = document.createElement('div');
                    muestraResultado.textContent = `RGB: ${conjunto}`;
                    rgbInput.appendChild(muestraResultado);

                    for(let j = 0; j < conjunto.length; j +=4)
                    {
                        conjunto[0] = Math.min((conjunto[0] + des) % 256 , 255, 255) ;
                        conjunto[1] = Math.min(255, (conjunto[1] + des) % 256, 255) ;
                        conjunto[2] = Math.min(255, 255, (conjunto[2] + des) % 256) ;

                        w[x] = conjunto[0];
                        y[x] = conjunto[1];
                        z[x] = conjunto[2];
                        x ++;
    
                        var rgbSuma = document.createElement('div');
                        rgbSuma.textContent = `SUMA RGB: (${conjunto[0]}, ${conjunto[1]}, ${conjunto[2]})`
                        rgbInput.appendChild(rgbSuma);
                    }

                }

                //const caja = [...conjunto].map(Number);
                const canvasDos = document.getElementById('canvas-dos');
                const ctxNuevo = canvasDos.getContext('2d');
    
                canvasDos.width = imagenBMP.width;
                canvasDos.height = imagenBMP.height;

                x=0;
                var i = 0;
                var j = 0;
                for(i = 0; i < canvasDos.height; i++)
                {
                    for(j = 0; j < canvasDos.width; j++)
                    {
                        var r = w[x];
                        var g = y[x];
                        var b = z[x];
                        
                        ctxNuevo.fillRect(j, i, canvasDos.height, canvasDos.width);
                        //ctxNuevo.fillRect(i, j, 1, 1);
                        ctxNuevo.fillStyle = `rgb(${r}, ${g}, ${b})`;
                        //console.log(i);
                        console.log(x);
                        console.log(r, g, b);
                        
                        x++;
                    }       
                }

                const canvasURL = canvasDos.toDataURL('image/bmp');
                var downloadimg = document.createElement('a');
      
                downloadimg.href = canvasURL;
                downloadimg.download = "imagen_c.bmp";
      
                downloadimg.click();

            };
        };

        lectura.readAsDataURL(archivo);

    });

    w=[];
    y=[];
    z=[];
    return 0;    

}


//-------------------- Función descifrar la imagen

function BotonDescifrar(){

    var des = document.getElementById('numeroInput');
    des = parseInt(des.value);

    var imagenInput = document.getElementById('img-input');
    const canvas = document.getElementById('canvas');
    const dosD = canvas.getContext('2d');
    const colores = document.getElementById('color');

    //alert(imagenInput);

    if(des < 0 || des > 255)
    {
        alert("El número ingresado es inválido");
        return -1;
    }

    imagenInput.addEventListener('change', () =>{

        const archivo = imagenInput.files[0];
        const lectura = new FileReader();
        var x=0;

        lectura.onload = (event) => 
        {

            const imagenBMP = new Image();
            imagenBMP.src = event.target.result;

            imagenBMP.onload = () => 
            {
                canvas.width = imagenBMP.width;
                canvas.height = imagenBMP.height;
                dosD.drawImage(imagenBMP,0,0);
    
                const datosImagen = dosD.getImageData(0,0,imagenBMP.width,imagenBMP.height);
                const pixels = datosImagen.data;
                
                const rgbInput = document.getElementById('color');
                rgbInput.innerHTML = '';

                for(let i=0;i<pixels.length; i+=4)
                {
                    var r = pixels[i];
                    var g = pixels[i+1];
                    var b = pixels[i+2];
                    console.log(pixels[i], pixels[i+1], pixels[i+2]);
    
                    const rgbTexto = document.createElement('div');
                    rgbTexto.textContent = `RGB: (${r}, ${g}, ${b})`;
    
                    const conjunto = [r,g,b];
    
                    const muestraResultado = document.createElement('div');
                    muestraResultado.textContent = `RGB: ${conjunto}`;
                    rgbInput.appendChild(muestraResultado);

                    for(let j = 0; j < conjunto.length; j +=4)
                    {

                        conjunto[0] = (conjunto[0] < des) ? (256 + conjunto[0] - des): (conjunto[0] - des);
                        conjunto[1] = (conjunto[1] < des) ? (256 + conjunto[1] - des): (conjunto[1] - des);
                        conjunto[2] = (conjunto[2] < des) ? (256 + conjunto[2] - des): (conjunto[2] - des);

                        conjunto[0] = Math.min(255, Math.max(0,conjunto[0]));
                        conjunto[1] = Math.min(255, Math.max(1,conjunto[1]));
                        conjunto[2] = Math.min(255, Math.max(0,conjunto[2]));

                        w[x] = conjunto[0];
                        y[x] = conjunto[1];
                        z[x] = conjunto[2];
                        x ++;
    
                        var rgbSuma = document.createElement('div');
                        rgbSuma.textContent = `SUMA RGB: (${conjunto[0]}, ${conjunto[1]}, ${conjunto[2]})`
                        rgbInput.appendChild(rgbSuma);
                    }
                }

                const canvasDos = document.getElementById('canvas-dos');
                const ctxNuevo = canvasDos.getContext('2d');

                canvasDos.width = imagenBMP.width;
                canvasDos.height = imagenBMP.height;

                x=0;
                var i = 0;
                var j = 0;

                for(i = 0; i < canvasDos.height; i++)
                {
                    for(j = 0; j < canvasDos.width; j++)
                    {

                        var r = w[x];
                        var g = y[x];
                        var b = z[x];
                        
                        ctxNuevo.fillRect(j, i, canvasDos.height, canvasDos.width);
                        //ctxNuevo.fillRect(i, j, 1, 1);
                        ctxNuevo.fillStyle = `rgb(${r}, ${g}, ${b})`;
                        //console.log(i);
                        console.log(x);
                        console.log(r, g, b);
                        
                        x++;
                    }                  
                }

                const canvasURL = canvasDos.toDataURL('image/bmp');
                var downloadimg = document.createElement('a');
      
                downloadimg.href = canvasURL;
                downloadimg.download = "imagen_c_d.bmp";
      
                downloadimg.click();

            };


        };

        lectura.readAsDataURL(archivo);

    });

    w=[];
    y=[];
    z=[];
    return 0;

}