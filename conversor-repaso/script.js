//capturo formulario y id's correspondientes
const formulario = document.querySelector('#form');
//declaro como let para que se hagan variables globales que pueda usar
//en cualquier funcion
let selecteDivisa = document.querySelector('#divisa-selected');
let convertDivisa = document.querySelector('#divisa-convert');
let convertResult = document.querySelector('#result');
//declaro fragmentos de lo que se creara en cada desplegable
let fragmento1 = document.createDocumentFragment();
let fragmento2 = document.createDocumentFragment();
let total = 0;

//matriz de arreglos:
//actualizada 11-8--2021
            //   a   USD        MXN         COP       UE         GBP
dolar =          [0,   0     , 19.93      , 3942.20 , 0.85    , 0.72    ]
pesoMexicano =   [0, 0.050   ,   0        , 197.79  , 0.043   , 0.036   ]
pesoColombiano = [0, 0.00025 , 0.0050     ,    0    , 0.00022 , 0.00018 ]
euro =           [0, 1.17    , 23.4       , 4628.0  ,    0    , 0.85    ]
libraEsterlina = [0, 1.39    , 27.64      , 5466.57 , 1.18    ,   0     ]

//declaro los arreglos que se mostraran en los desplegables
var divisa = [
    'Elige tu Moneda',
    'Dolares (USD)',
    'Pesos Mexicanos (MXN)',
    'Pesos Colombianos (COP)',
    'Euros (UE)',
    'Libra Esterlinas (GBP)'];

var cambio = [
    'Elige moneda de cambio',
    'Dolares (USD)',
    'Peso Mexicanos (MXN)',
    'Peso Colombianos(COP)',
    'Euros (UE)',
    'Libras Esterlinas (GBP)']

//recorro el arreglo
divisa.forEach((data, index) => {
    const item = document.createElement('option');//creo un elemento option
    item.setAttribute('value', index); //con su value
    item.textContent = data;
    fragmento1.appendChild(item); //y llamo appenchild
})
//lo mismo que lo anterior
cambio.forEach((data, i) => {
    const item = document.createElement('option');
    item.setAttribute('value', i);
    item.textContent = data;
    fragmento2.appendChild(item);
})

//muestro el appenchild
selecteDivisa.appendChild(fragmento1);
convertDivisa.appendChild(fragmento2);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //leo el monto ingresado en el campo con id monto
    //parseFloar convierte un argumento o cadena en un float 
    //parse convierte argumentos en lo que deseemos
    const montoIngresado = parseFloat(document.querySelector('#monto').value);
    //selecciono los index de mi selecteDivisa y convertDivisa declarada
    //al comienzo y las renombro como divisaSelected y divisaConvert
    const divisaSelected = selecteDivisa.options[selecteDivisa.selectedIndex].value;
    console.log(divisaSelected);
    const divisaConvert = convertDivisa.options[convertDivisa.selectedIndex].value;
    console.log(divisaConvert);
    //si el index de divisaSelected o el index de divisaConvert son iguales a cero
    if (divisaSelected == 0 || divisaConvert == 0) {
        //quiere decir que esta en la posicion Elige tu moneda - Elige moneda de cambio
        //por tanto
        convertResult.innerHTML = 'Seleccione sus divisas'
    //al contrario si el index de divisaSelected es igual al index de divisaConvert
    } else if (divisaSelected == divisaConvert) {
        //quiere decir que ambas posiciones estan en el mismo sitio ej dolar - dolar
        convertResult.innerHTML = 'Las divisas deben ser distintas'
    //al contrario si el monto ingresado es negativo o es NaN
    }else if (montoIngresado <= 0 || isNaN(formulario.monto.value)==true){
        //debe ingresar un monto valido
        convertResult.innerHTML = 'Ingrese un monto valido'
    //al contrario si divisaSelected == 1 osea esta en dolar
    }else if (divisaSelected == 1){
        //digo que le total sera igual al cruce de la matriz de arreglos por el monto intgresado
        total = dolar[divisaConvert]*montoIngresado;
        //muestro en mi div el resultado
        convertResult.innerHTML=`<strong>Su conversión es:</strong> ${total.toFixed(2)}`;
    //en los siguientes se aplica lo mismo que el anterior
    }else if (divisaSelected == 2){
        total = pesoMexicano[divisaConvert]*montoIngresado;  
        convertResult.innerHTML=`<strong>Su conversión es:</strong> ${total.toFixed(2)}`;
    }else if (divisaSelected == 3){
        total = pesoColombiano[divisaConvert]*montoIngresado;
        convertResult.innerHTML=`<strong>Su conversión es:</strong> ${total.toFixed(2)}`;
    }else if (divisaSelected == 4){
        total = euro[divisaConvert]*montoIngresado;
        convertResult.innerHTML=`<strong>Su conversión es:</strong> ${total.toFixed(2)}`;
    }else if (divisaSelected == 5){
        total = libraEsterlina[divisaConvert]*montoIngresado;
        convertResult.innerHTML=`<strong>Su conversión es:</strong> ${total.toFixed(2)}`;
    }
})