var titulo = document.querySelector(".titulo");
titulo.textContent = "Mario Nutrição";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoEValido = validaPeso(peso);
    var AlturaEValido = validaAltura(altura);

    if(!pesoEValido){
        console.log("Peso Invalido!");
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!AlturaEValido){
        console.log("Altura Inválida");
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEValido && AlturaEValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
   

    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso <=500 ){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <=3 ){
        return true;
    }else{
        return false;
    }
}

