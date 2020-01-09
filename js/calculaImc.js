var titulo = document.querySelector(".titulo");
titulo.textContent = "Mario Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);


for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var imcValido = true;

    if(peso <= 0 || peso > 500){
        console.log("Peso Invalido!");
        tdImc.textContent = "Peso Inválido";
        imcValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura > 3.00){
        console.log("Altura Inválida");
        tdImc.textContent = "Altura Inválida";
        imcValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(imcValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
   

    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}