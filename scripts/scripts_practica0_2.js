

// IMAGEN ALGORTIMO

const imagenInput = document.getElementById('img-input');
const canvas = document.getElementById('canvas');
const dosD = canvas.getContext("2d");
const colores = document.getElementById('color');

// const aumentoRGB = document.getElementById('aumento');
// const factorInput = document.getElementById('factorInput');

// var numImg = document.getElementById('numeroInput').value;
// console.log(numImg);
// numImg = parseInt(numImg);


function BotonCifrar () {
    const numeroInput = document.getElementById('numeroInput');
    const resultadoNumero = document.getElementById('resultado');

    const numeroIngresado = parseInt(numeroInput.value);
    if (numeroIngresado >= 0 && numeroIngresado <= 255) {
        resultadoNumero.textContent = `Número ingresado válido: ${numeroIngresado}`;
    } else {
        resultadoNumero.textContent = `Número no válido`;
    }
    console.log(numeroIngresado);

    imagenInput.addEventListener('change', () => {
        const archivo = imagenInput.files[0];
        const lectura = new FileReader();
    
        lectura.onload = (event) => {
            const imagenBMP = new Image();
            imagenBMP.src = event.target.result;
    
            imagenBMP.onload = () => {
                canvas.width = imagenBMP.width;
                canvas.height = imagenBMP.height;
                dosD.drawImage(imagenBMP,0,0);
    
                const datosImagen = dosD.getImageData(0,0,imagenBMP.width,imagenBMP.height);
                const pixels = datosImagen.data;
                
                const rgbInput = document.getElementById('color');
                rgbInput.innerHTML = '';
    
                for (let i=0;i<pixels.length; i+=4) {
                    const r = pixels[i];
                    const g = pixels[i+1];
                    const b = pixels[i+2];
                    console.log(pixels[i], pixels[i+1], pixels[i+2]);
    
                    const rgbTexto = document.createElement('div');
                    rgbTexto.textContent = `RGB: (${r}, ${g}, ${b})`;
    
                    const conjunto = [r,g,b];
                    // const unicoResultado = [conjunto];
                    // console.log(conjunto);
    
                    const muestraResultado = document.createElement('div');
                    muestraResultado.textContent = `RGB: ${conjunto}`;
                    rgbInput.appendChild(muestraResultado);
    
    
                    for (let j = 0; j < conjunto.length; j +=4) {
                        conjunto[0] = Math.min((conjunto[0] + numeroIngresado) % 256 , 255, 255) ;
                        conjunto[1] = Math.min(255, (conjunto[1] + numeroIngresado) % 256, 255) ;
                        conjunto[2] = Math.min(255, 255, (conjunto[2] + numeroIngresado) % 256) ;
    
                        const rgbSuma = document.createElement('div');
                        rgbSuma.textContent = `SUMA RGB: (${conjunto[0]}, ${conjunto[1]}, ${conjunto[2]})`
                        rgbInput.appendChild(rgbSuma);
    
                        // console.log(conjunto[0]);
    
    
                    }
    
    
                    const caja = [...conjunto].map(Number);
    
                    // const grupoConjunto = new Set([
                    //     [...conjunto][0], 
                    //     [...conjunto][1], 
                    //     [...conjunto][2]
                    // ]);
    
    
                    const canvasDos = document.getElementById('canvas-dos');
                    const ctxNuevo = canvasDos.getContext('2d');
    
                    
                    canvasDos.width = imagenBMP.width;
                    canvasDos.height = imagenBMP.height;
    
                    ctxNuevo.fillStyle = `rgb(${caja[0]}, ${caja[1]}, ${caja[2]})`;
                    ctxNuevo.fillRect(0, 0, canvasDos.width, canvasDos.height);
    
                };
    
            };
        };
        lectura.readAsDataURL(archivo);
    });
}