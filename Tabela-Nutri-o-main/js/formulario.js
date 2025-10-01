var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',
    function(event){
        event.preventDefault();
        
        //Seleciona a tag <form> a partir do id
        var formulario = document.querySelector('#form-adiciona');
        
        //Variaveis para acessar o valor do <input>
        var paciente = dadosPacientesFormulario(formulario);
    
         //cria o elemento <tr>
        var pacienteTr = criaTr(paciente);

        
         var tabela = document.querySelector("#tabela-pacientes");
         tabela.appendChild(pacienteTr);
         formulario.reset(); //reseta o campo do formulário
    }
);

function dadosPacientesFormulario(formulario){
    //objeto paciente 
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        IMC: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    console.log(paciente);
    return paciente;
}

//criação da função com o parâmetro "paciente"
function criaTr(paciente){  
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

     //cria as tag <td>
     pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
     return pacienteTr;
}

function criaTd(dado, classes){ //parâmetros vazios, mas são trocados
    var td = document.createElement("td"); //cria qualquer td
    td.textContent = dado; //dados do paciente, peso, altura, etc.
    td.classList.add(classes); //classes de peso, altura, etc.

    return td;
}
