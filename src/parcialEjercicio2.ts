let bt1Enviar = <HTMLButtonElement>document.getElementById("bt1Enviar");
let bt2Enviar = <HTMLButtonElement>document.getElementById("bt2Enviar");
let bt3Enviar = <HTMLButtonElement>document.getElementById("bt3Enviar");
let bt4Enviar = <HTMLButtonElement>document.getElementById("bt4Enviar");

let resultado = <HTMLParagraphElement>document.getElementById("resultado");

let notasComisionA: number[] = [8,5,7,10,9,2,4,8,6,8];
let notasComisionB: number[] = [3,6,8,5,4,7,7,4,6,8];
let notasComisionC: number[] = [7,6,9,8,9,8,5,7,10,9];


const notaLimite: number = 6;

let promedioA: number = 0;
let promedioB: number = 0;
let promedioC: number = 0;

function cantidadMateriasDesaprobadas (notas1: number[], limiteNota:number) {
   let contadorDesaprobados: number =0;  
   for (let indice = 0; indice < notas1.length; indice++) {
     if  notas1 [indice] <= limiteNota {
       contadorDesaprobados ++;
     };
    };
   return (contadorDesaprobados);
 };
  

function materiasConMenorNota (notas1: number[]){
  let indiceAux: number = 0;

  indiceAux = 0;
  for (let indice = 0; indice < notas1.length; indice++) {
    if  notas1[indice] < notas1[indiceAux] {
      indiceAux = indice;
    };
   };
  return (indiceAux);
};

function promedioNotas (notas1: number[]){
  let promedio: number = 0;
  let suma :number =0;

  for (let indice = 0; indice < notas1.length; indice++) {
     suma = suma + notas1[indice]
   };
   promedio = suma / notas1.length
  return (promedio);
};


bt1Enviar.addEventListener("click", () => {
  console.log ("Las cantidad de Desaprobados de la comision A: " +  (cantidadMateriasDesaprobadas(notasComisionA,notaLimite)) );
  console.log ("Las cantidad de Desaprobados de la comision B: " +  (cantidadMateriasDesaprobadas(notasComisionB,notaLimite)) );
  console.log ("Las cantidad de Desaprobados de la comision C: " +  (cantidadMateriasDesaprobadas(notasComisionC,notaLimite)) );
};

bt2Enviar.addEventListener("click", () => {
  console.log("la comision con menor promedio");
  promedioA = promedioNotas(notasComisionA);
  promedioB = promedioNotas(notasComisionB);
  promedioC = promedioNotas(notasComisionC);
  if (promedioA <= promedioB && promedioA <= promedioC){
     console.log("Comision A");
  } else { if (promedioB <= promedioA && promedioB <= promedioC){
             console.log("Comision B");
           }else {if (promedioC <= promedioA && promedioC <= promedioB){
               console.log("Comision C");
                 };
                };
           };
 };

bt3Enviar.addEventListener("click", () => {
  console.log("la comision con mayor promedio");
  promedioA = promedioNotas(notasComisionA);
  promedioB = promedioNotas(notasComisionB);
  promedioC = promedioNotas(notasComisionC);
  if (promedioA >= promedioB && promedioA >= promedioC){
     console.log("Comision A");
  } else { if (promedioB >= promedioA && promedioB >= promedioC){
            console.log("Comision B");
           }else {if (promedioC >= promedioA && promedioC >= promedioB){
                   console.log("Comision C");
                 };
                };
           };
};

bt4Enviar.addEventListener("click", () => {
  console.log ("La menor Nota de la comision A: " +  (materiasConMenorNota(notasComisionA) );
  console.log ("La menor Nota de la comision B: " +  (materiasConMenorNota(notasComisionB) );
  console.log ("La menor Nota de la comision C: " +  (materiasConMenorNota(notasComisionC) );
};
}
