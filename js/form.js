
var botaoAdicionar = document.querySelector("#adicionar-paciente");
var form = document.querySelector("#form-adiciona");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    //pega informações do formulário
    var paciente = obtemPacienteDoFormulario(form);
    
    //cria a linha na tabela e coloca a informação
    
    var trPaciente = montaLinha(paciente);

    //atribui a linha a tabela.
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(trPaciente);
    form.reset();

});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}

function montaLinha(paciente){
    //cria ao elemento tr
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");
    // monta os td e adiciona na tabela.
    trPaciente.appendChild(montaTd(paciente.nome, "info-nome"));    
    trPaciente.appendChild(montaTd(paciente.peso, "info-peso"));    
    trPaciente.appendChild(montaTd(paciente.altura, "info-altura"));    
    trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
    trPaciente.appendChild(montaTd(paciente.imc, "info-imc"));
    return trPaciente;
    
}

    

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
