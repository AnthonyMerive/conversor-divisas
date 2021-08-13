
const formulario = document.querySelector('#form');
let divA = document.querySelector('#monedaSelected');
let divB = document.querySelector('#monedaConvert');
let result = document.querySelector('#result');
let signo = document.querySelector('#signo');
let signoA = document.querySelector('#signoA');
let fragmentA = document.createDocumentFragment();
let fragmentB = document.createDocumentFragment();
let total = 0;
dolar = [0, 0, 19.93, 3942.20, 0.85, 0.72]
pesoMexicano = [0, 0.050, 0, 197.79, 0.043, 0.036]
pesoColombiano = [0, 0.00025, 0.0050, 0, 0.00022, 0.00018]
euro = [0, 1.17, 23.4, 4628.0, 0, 0.85]
libraEsterlina = [0, 1.39, 27.64, 5466.57, 1.18, 0]

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

divisa.forEach((data, index) => {
    const item = document.createElement('option');
    item.setAttribute('value', index);
    item.textContent = data;
    fragmentA.appendChild(item);
})

cambio.forEach((data, index) => {
    const item = document.createElement('option');
    item.setAttribute('value', index);
    item.textContent = data;
    fragmentB.appendChild(item);
})

divA.appendChild(fragmentA);
divB.appendChild(fragmentB);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const monto = parseFloat(document.querySelector('#inputMoneda').value);
    const divisaA = divA.value;
    const divisaB = divB.value;

    console.log(monto, divisaA, divisaB);

    if (divisaA == 0 || divisaB == 0) {
        result.innerHTML = '<strong>Seleccione Divisa</strong>';
    } else if (divisaA == divisaB) {
        result.innerHTML = '<strong>Seleccione Divisa a convertir</strong>';
    } else if (monto <= 0 || isNaN(monto) == true) {
        result.innerHTML = '<strong>Ingrese un monto valido</strong>';
    } else if (divisaA == 1) {
        total = dolar[divisaB] * monto;
        signo.innerHTML = '<strong>USD</strong>';
        result.innerHTML = `${total.toFixed(2)}`;
    } else if (divisaA == 2) {
        total = pesoMexicano[divisaB] * monto;
        signo.innerHTML = '<strong>MXN</strong>';
        result.innerHTML = `${total.toFixed(2)}`;
    } else if (divisaA == 3) {
        total = pesoColombiano[divisaB] * monto;
        signo.innerHTML = '<strong>COP</strong>';
        result.innerHTML = `${total.toFixed(2)}`;
    } else if (divisaA == 4) {
        total = euro[divisaB] * monto;
        signo.innerHTML = '<strong>UE</strong>';
        result.innerHTML = `${total.toFixed(2)}`;
    } else if (divisaA == 5) {
        total = libraEsterlina[divisaB] * monto;
        signo.innerHTML = '<strong>GBP</strong>';
        result.innerHTML = `${total.toFixed(2)}`;
    }

    if (divisaB == 1) {
        signoA.innerHTML = '<strong>USD</strong>';
    } else if (divisaB == 2) {
        signoA.innerHTML = '<strong>MXN</strong>';
    } else if (divisaB == 3) {
        signoA.innerHTML = '<strong>COP</strong>';
    } else if (divisaB == 4) {
        signoA.innerHTML = '<strong>UE</strong>';
    } else if (divisaB == 5) {
        signoA.innerHTML = '<strong>GBP</strong>';
    }
})