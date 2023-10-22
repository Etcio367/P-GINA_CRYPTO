
function VerifyNumber(){
    var number =parseInt(document.getElementById('input_value').value);
    var modulo = parseInt(document.getElementById('modulo').value);
    console.log(window);
    console.log(modulo);
    let value = new Array();
    //var number = parseInt(aux);
    //alert(number);

    if(number < 2 || number > 4){
        alert("Por favor, ingrese un valor entre 2 y 4!");
        return 0;
    }

    for(var i = 0; i < number; i++){
        let table = document.getElementById('table').insertRow(i);
        for(var j=0; j < number; j++){
            let col1 = table.insertCell(j);
            var value1 = window.prompt("Por favor, ingrese un número: ")
            value.push(value1);
            col1.innerHTML = value1;            
        }
    }

    //console.log(value);

    var result = MatrizInversa(number, value, modulo);

    number = 0;
    value = null;
}

function MatrizInversa(number, value, modulo){
    var aux= value;

    console.log(aux);

    var resultado1 = denominador(number, aux, modulo);

    if(resultado1 === 0)
    {
        console.log(window);
        alert("La matriz no tiene inversa!! ");
        return 0;
    }
    
    var modDenom = resultado1;

    var adj = adjuntiva(number, aux, resultado1, modulo, modDenom);

    return 1;
}

function denominador(number, aux, modulo){

    if(number === 2)
    {
        var val1 = parseInt(aux[0]);
        var val2 = parseInt(aux[1]);
        var val3 = parseInt(aux[2]);
        var val4 = parseInt(aux[3]);

        var denom = ((val1 * val4)-(val2*val3));
        
        console.log("el denominador es: " + denom);
        

        if(denom === 0)
        {
            console.log("La matriz no tiene inversa ");
            return 0;
        }
        else{
            console.log(denom, modulo);
            var comprobacion = AE(denom, modulo);
            console.log(comprobacion);
            if(comprobacion != 1){
                console.log("La matriz no tiene inversa ");
                return 0;
            }
        }

        return denom;
    }

    if(number === 3)
    {
        var val1 = parseInt(aux[0]);
        var val2 = parseInt(aux[1]);
        var val3 = parseInt(aux[2]);
        var val4 = parseInt(aux[3]);
        var val5 = parseInt(aux[4]);
        var val6 = parseInt(aux[5]);
        var val7 = parseInt(aux[6]);
        var val8 = parseInt(aux[7]);
        var val9 = parseInt(aux[8]);

        var denom = ((val1*val5*val9)+(val4*val8*val3)+(val2*val6*val7)) - ((val3*val5*val7)+(val6*val8*val1)+(val2*val4*val9));

        console.log(denom);
        var comprobacion = AE(denom, modulo);

        if(denom === 0 || comprobacion != 1)
        {
            console.log("La matriz no tiene inversa ");
            return 0;
        }

        return denom;

    }

    if(number === 4)
    {
        var val1 = parseInt(aux[0]);
        var val2 = parseInt(aux[1]);
        var val3 = parseInt(aux[2]);
        var val4 = parseInt(aux[3]);
        var val5 = parseInt(aux[4]);
        var val6 = parseInt(aux[5]);
        var val7 = parseInt(aux[6]);
        var val8 = parseInt(aux[7]);
        var val9 = parseInt(aux[8]);
        var val10 = parseInt(aux[9]);
        var val11 = parseInt(aux[10]);
        var val12 = parseInt(aux[11]);
        var val13 = parseInt(aux[12]);
        var val14 = parseInt(aux[13]);
        var val15 = parseInt(aux[14]);
        var val16 = parseInt(aux[15]);

        var parte1 = val1*((val6*val11*val16 + val10*val15*val8 + val7*val12*val14) - (val14*val11*val8 + val15*val12*val6 + val10*val7*val16));
        var parte2 = val2*(((val5*val11*val16 + val7*val12*val13 + val9*val15*val8) - (val13*val11*val8 + val15*val12*val5 + val9*val7*val16))*-1);
        
        var parte3 = val3*((val5*val10*val16 + val6*val12*val13 + val9*val8*val14) - (val13*val10*val8 + val9*val16*val6 + val14*val12*val5));
        var parte4 = val4*(((val5*val10*val15 + val6*val11*val13 + val9*val14*val7) - (val13*val10*val7 + val15*val9*val6 + val14*val11*val5))*-1);

        var denom = parte1 + parte2 + parte3 + parte4;
        var comprobacion = AE(denom, modulo);

        if(denom === 0 || comprobacion != 1)
        {
            console.log("La matriz no tiene inversa ");
            return 0;
        }

        console.log(denom);

        return denom;
        
    }


}

function adjuntiva(number, aux, resultado1, modulo, modDenom){

    var cadena = new Array();

    if(number === 2)
    {
        var val1 = parseInt(aux[0]);
        var val2 = parseInt(aux[1]);
        var val3 = parseInt(aux[2]);
        var val4 = parseInt(aux[3]);

        let table2 = document.getElementById('table2').insertRow(0);

        let col1 = table2.insertCell(0);
        val3 = val3 * -1;
        cadena.push(val3);
        col1.innerHTML = Negatividad(val3, resultado1);
        
        col1 = table2.insertCell(1);
        cadena.push(val1);
        col1.innerHTML = Negatividad(val1, resultado1);    


        table2 = document.getElementById('table2').insertRow(0);

        cadena.push(val4);
        col1 = table2.insertCell(0);
        col1.innerHTML = Negatividad(val4, resultado1);

        col1 = table2.insertCell(1);        
        val2 = val2 * -1;
        cadena.push(val2);
        col1.innerHTML = Negatividad(val2, resultado1);

        var funcion = nuevaTabla(number, cadena, modulo, modDenom);

        return 0;
    }

    if(number === 3){
        var val1 = parseInt(aux[0]);
        var val2 = parseInt(aux[1]);
        var val3 = parseInt(aux[2]);
        var val4 = parseInt(aux[3]);
        var val5 = parseInt(aux[4]);
        var val6 = parseInt(aux[5]);
        var val7 = parseInt(aux[6]);
        var val8 = parseInt(aux[7]);
        var val9 = parseInt(aux[8]);

        let table2 = document.getElementById('table2').insertRow(0);

        let col1 = table2.insertCell(0);
        var val = (val5*val9) - (val6*val8);
        console.log(val);
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(1);
        val = ((val2*val9)-(val8*val3)) * -1;
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(2);
        val = ((val2*val6)-(val5*val3));
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);


        table2 = document.getElementById('table2').insertRow(1);
        
        col1 = table2.insertCell(0);
        val = ((val4*val9) - (val7*val6)) * -1;
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(1);
        val = ((val1*val9)-(val3*val7));
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(2);
        val = ((val1*val6)-(val4*val3)) * -1;
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        table2 = document.getElementById('table2').insertRow(2);
        
        col1 = table2.insertCell(0);
        val = ((val4*val8) - (val7*val5));
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(1);
        val = ((val1*val8)-(val7*val2)) * -1;
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(2);
        val = ((val1*val5)-(val2*val4));
        cadena.push(val);
        col1.innerHTML = Negatividad(val, resultado1);

        var funcion = nuevaTabla(number, cadena, modulo, modDenom);

        return 0;

    }

    if(number === 4)
    {
        var val1 = parseInt(aux[0]);
        var val2 = parseInt(aux[1]);
        var val3 = parseInt(aux[2]);
        var val4 = parseInt(aux[3]);
        var val5 = parseInt(aux[4]);
        var val6 = parseInt(aux[5]);
        var val7 = parseInt(aux[6]);
        var val8 = parseInt(aux[7]);
        var val9 = parseInt(aux[8]);
        var val10 = parseInt(aux[9]);
        var val11 = parseInt(aux[10]);
        var val12 = parseInt(aux[11]);
        var val13 = parseInt(aux[12]);
        var val14 = parseInt(aux[13]);
        var val15 = parseInt(aux[14]);
        var val16 = parseInt(aux[15]);

        let table2 = document.getElementById('table2').insertRow(0);

        let col1 = table2.insertCell(0);
        var val = ((val6*val11*val16 + val7*val12*val14 + val10*val15*val8) - (val8*val11*val14 + val7*val10*val16 + val12*val15*val6));
        console.log(val);
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(1);
        val = ((val2*val11*val16 + val3*val12*val14 + val10*val15*val4) - (val4*val11*val14 + val3*val10*val16 + val12*val15*val2)) * -1;
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(2);
        val = ((val2*val7*val16 + val3*val8*val14 + val6*val15*val4) - (val4*val7*val14 + val3*val6*val16 + val8*val15*val2));
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(3);
        val = ((val2*val7*val12 + val3*val8*val10 + val6*val11*val4) - (val4*val7*val10 + val3*val6*val12 + val8*val11*val2)) * -1;
        col1.innerHTML = Negatividad(val, resultado1);


        table2 = document.getElementById('table2').insertRow(1);
        
        col1 = table2.insertCell(0);
        val = ((val5*val11*val16 + val9*val8*val15 + val7*val12*val13) - (val8*val11*val13 + val7*val9*val16 + val12*val15*val5)) * -1;
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(1);
        val = ((val1*val11*val16 + val9*val4*val15 + val3*val12*val13) - (val4*val11*val13 + val3*val9*val16 + val12*val15*val1));
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(2);
        val = ((val1*val7*val16 + val5*val4*val15 + val3*val8*val13) - (val4*val7*val13 + val3*val5*val16 + val8*val15*val1)) * -1;
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(3);
        val = ((val1*val7*val12 + val5*val4*val11 + val3*val8*val9) - (val4*val7*val9 + val3*val5*val12 + val8*val11*val1)) * -1;
        col1.innerHTML = Negatividad(val, resultado1);

        table2 = document.getElementById('table2').insertRow(2);
        
        col1 = table2.insertCell(0);
        val = ((val5*val10*val16 + val9*val14*val8 + val6*val12*val13) - (val8*val10*val13 + val6*val9*val16 + val12*val14*val5));
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(1);
        val = ((val1*val10*val16 + val9*val14*val4 + val2*val12*val13) - (val4*val10*val13 + val2*val9*val16 + val12*val14*val1)) * -1;
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(2);
        val = ((val1*val6*val16 + val5*val14*val4 + val2*val8*val13) - (val4*val6*val13 + val2*val5*val16 + val8*val14*val1));
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(3);
        val = ((val1*val6*val12 + val5*val10*val4 + val2*val8*val9) - (val4*val6*val9 + val2*val5*val12 + val8*val10*val1)) * -1;
        col1.innerHTML = Negatividad(val, resultado1);



        table2 = document.getElementById('table2').insertRow(3);
        
        col1 = table2.insertCell(0);
        val = ((val5*val10*val15 + val9*val14*val7 + val6*val11*val13) - (val7*val10*val13 + val6*val9*val15 + val11*val14*val5))*-1;
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(1);
        val = ((val1*val10*val15 + val9*val14*val3 + val2*val11*val13) - (val3*val10*val13 + val2*val9*val15 + val11*val14*val1));
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(2);
        val = ((val1*val6*val15 + val5*val14*val3 + val2*val7*val13) - (val3*val6*val13 + val2*val5*val15 + val7*val14*val1))*-1;
        col1.innerHTML = Negatividad(val, resultado1);

        col1 = table2.insertCell(3);
        val = ((val1*val6*val11 + val5*val10*val3 + val2*val7*val9) - (val3*val6*val9 + val2*val5*val11 + val7*val10*val1));
        col1.innerHTML = Negatividad(val, resultado1);


    }

}


function Negatividad(val, resultado1){

    var aux = val / resultado1;

    console.log(val,resultado1);
    console.log(aux);

    if(aux === 0){
        return ("0");
    }

    if(aux >= 0){
        if(resultado1 < 0){
            resultado1 = resultado1 *-1;
        }
        if(val < 0){
            val = val * -1;
        }
        return(val + "/" + resultado1);
    }

    else if(aux <= 0){
        if(resultado1 < 0){
            resultado1 = resultado1 *-1;
        }
        if(val < 0){
            val = val * -1;
        }
        return("-" + val + "/" + resultado1);
    }
    
}

function AE(determinante, modulo)
{
    while (modulo !== 0) {
        const valorActual = modulo;
        modulo = determinante % modulo;
        determinante = valorActual;
        //console.log(determinante);
    }
    return determinante;
}

function nuevaTabla(number, cadena, modulo, modDenom){

    var determinante;

    if(modDenom > modulo || modDenom < modulo*-1)
    {
        if(modDenom < 0)
        {
            var aux = modDenom *-1;
            aux = aux % modulo;
            determinante = calculaAEE(aux, modulo);
        }
        else
        {
            var aux = modDenom % modulo;
            determinante = calculaAEE(aux, modulo);
        }

    }
    else{
        determinante = calculaAEE(modDenom, modulo);
    }
    
    
    
    if(number === 2)
    {
        let table = document.getElementById('table3').insertRow(0);
        
        let col1 = table.insertCell(0);
        resultado = (cadena.pop()*determinante) % modulo;
        col1.innerHTML = resultado;

        col1 = table.insertCell(1);
        resultado = (cadena.pop()*determinante) % modulo;
        col1.innerHTML = resultado;

        table = document.getElementById('table3').insertRow(0);
        
        col1 = table.insertCell(0);
        resultado = (cadena.pop()*determinante) % modulo;
        col1.innerHTML = resultado;

        col1 = table.insertCell(1);
        resultado = (cadena.pop()*determinante) % modulo;
        col1.innerHTML = resultado;

    }

    if(number === 3 || number === 4)
    {
        console.log(cadena);
        for(var i = 0; i < number; i++){
            let table = document.getElementById('table3').insertRow(i);

            for(var j=0; j < number; j++)
            {
                let col1 = table.insertCell(j);
                var aux = cadena.shift();
                var aux2 = aux/modDenom;
                console.log(aux2);
                console.log(aux);
                if(aux >= modulo || aux <= modulo*-1) 
                {
                    if(aux2 >= 0)
                    {
                        if(aux < 0)
                        {
                            aux = aux*-1;
                            console.log(aux);
                            aux = aux % modulo;
                            console.log(aux);
                        }
                        else
                        {
                            console.log(aux);
                            aux = aux % modulo;
                            console.log(aux);
                        }
                    }
                    else if(aux2 <= 0)
                    {
                        if(aux < 0)
                        {
                            aux = aux*-1;
                            console.log(aux);
                            aux = aux % modulo;
                            console.log(aux);
                            aux = modulo - aux;
                            console.log(aux); 
                        }
                        else
                        {
                            aux = aux % modulo;
                            console.log(aux);
                            aux = modulo - aux;
                            console.log(aux);                            
                        }
                    }   
                }
                else
                {
                    if(aux2 >= 0)
                    {
                        
                        console.log(aux);
                        aux = aux % modulo;
                        console.log(aux);
                    }
                    else if(aux2 <= 0)
                    {

                        if(aux < 0)
                        {
                            aux = aux*-1;
                        }

                        console.log(aux);
                        aux = modulo - aux;
                        console.log(aux);
                        aux = aux % modulo;
                    }   
                }
                console.log(aux, determinante, modulo);
                var resultado=(aux*determinante) % modulo;
                col1.innerHTML = resultado;
            }

        }
    }
}


function calculaAEE(alfa, n) {
    let x0 = 1,
        x1 = 0,
        y0 = 0,
        y1 = 1,
        a = alfa,
        b = n;
    while (b !== 0) {
        const cociente = Math.floor(a / b);
        console.log("alfa: " + a);
        const r = a % b;
        const x2 = x0 - cociente * x1;
        const y2 = y0 - cociente * y1;

        a = b;
        b = r;
        x0 = x1;
        x1 = x2;
        y0 = y1;
        y1 = y2;
    }

    if (a !== 1) {
        // No existe un inverso multiplicativo si el MCD no es igual a 1
        return null;
    } else {
        // Asegurarse de que el inverso sea positivo
        if (x0 < 0) {
            x0 += n;
        }
        console.log("inverso: ", + x0);
        return x0;
    }
    console.log("inverso: ", + x0);
    return x0;
};