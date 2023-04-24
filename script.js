console.log("Ciao Mondo");

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

console.log(input.value);

h1.innerHTML = ("Jhonny Developer");
h1.innerText = "Nuevo Titulo";

console.log(h1.getAttribute("class"));

h1.setAttribute("class","rojo");

h1.classList.add("verde");
h1.classList.add("azul");

h1.classList.remove("rojo");

input.value = "456";

const img = document.createElement("img");

img.setAttribute("src","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?" +
    "auto=compress&cs=tinysrgb&w=600");


pid.innerHTML="";
pid.append(img);

const h2 = document.querySelector("h2");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#result");

const inp1 = document.querySelector("#valor1");
const inp2 = document.querySelector("#valor2");
const btn1 = document.querySelector("#btnCalcular1");
const pResult1 = document.querySelector("#resultado");

btn1.addEventListener("click",btnOnClick1)

function btnOnClick1(){
    const Resultado1 = (inp1.value + inp2.value);
    pResult1.innerHTML = "Resultado: " + Resultado1;
}

function btnOnClick(){
    const Resultado = (input1.value + input2.value);
    pResult.innerHTML =  "Resultado: " + Resultado;
}

const form = document.querySelector("form");
const dato1 = document.querySelector("#dato1");
const dato2 = document.querySelector("#dato2");
const btnDato= document.querySelector("#btnCalcularDato");
const resultDato = document.querySelector("#resultadoDato");

form.addEventListener("submit",sumarDatos)

function sumarDatos (event){
    event.preventDefault();
    const resultadoDatos =(dato1.value + dato2.value);
    resultDato.innerHTML = "Resultado: " + resultadoDatos;
}