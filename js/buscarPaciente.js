var btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    var resultado = [];
    xhr.send();
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente){
            adicionarPaciente(paciente);
    
            });
        }else{
            console.log(xhr.status);
            
            console.log(xhr.responseText);
        }
        
        

        
    });
});