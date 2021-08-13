/*----- Varibles globales -----*/
let divisaIn = document.querySelector("#monedaSelected");
let divisaOut = document.querySelector("#monedaConvert");
let result = document.querySelector("#result");
let symbol = document.getElementById("symbol");
let divisa = [
  "Elige tu Moneda",
  "Dolares (USD)",
  "Pesos Mexicanos (MXN)",
  "Pesos Colombianos (COP)",
  "Euros (UE)",
  "Libra Esterlinas (GBP)"
];
//           idx  USD        MXN         COP       UE         GBP
let values = [[0,   0     , 19.93      , 3942.20 , 0.85    , 0.72    ],
              [0, 0.050   ,   0        , 197.79  , 0.043   , 0.036   ],
              [0, 0.00025 , 0.0050     ,    0    , 0.00022 , 0.00018 ],
              [0, 1.17    , 23.4       , 4628.0  ,    0    , 0.85    ],
              [0, 1.39    , 27.64      , 5466.57 , 1.18    ,   0     ]];
let symbols = ["$", "$", "$", "€", "£"]


/*----- Generar Opciones de <select> -----*/
function generateOptions(formDivisa){
  divisa.forEach((data, idx) => {
    let option = new Option(data, idx);
    formDivisa.add(option);
  });
}

generateOptions(divisaIn);
generateOptions(divisaOut);


/*-----Evento de formulario-----*/
let button = document.getElementById("btn");

button.addEventListener("click", e =>{
  e.preventDefault();

  const divisaSelected = divisaIn.options[divisaIn.selectedIndex].value;
  const divisaConvert = divisaOut.options[divisaOut.selectedIndex].value;
  const currValue = document.querySelector("#inputoMoneda").value;

  if(isNaN(Number(currValue)) ||currValue <= 0 || divisaConvert == 0
    || divisaSelected == 0 || divisaSelected == divisaConvert ){
    Swal.fire("Revise sus datos");
  }
  else{
  
    result.innerHTML = (values[divisaSelected-1][divisaConvert] * currValue).toFixed(2);
    symbol.innerHTML = symbols[divisaConvert-1];
  }
});