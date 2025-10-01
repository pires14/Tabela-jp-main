//Este bloco altera o subtitulo e o titulo//
var Tsecundario = document.querySelector(".titulo-secundario");
Tsecundario.textContent = "Meus pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela Nutrição";

//Este bloco determina a variavel paciente e peso do primeiro paciente//
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //Este bloco determina a variavel altura do primeiro paciente//
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //Este bloco determina a variavel IMC do primeiro paciente e muda seu conteúdo//
    var IMC = calculaIMC(peso, altura);

    //valores booleanos
    var pesoValido = true;
    var alturaValida = true;
    //

    //executa o calculo do IMC//
    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = IMC;
    }

    //alerta caso o peso e altura sejam invalidos
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        tdIMC.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        var alturaValida = false;
        tdIMC.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    //
}

titulo.addEventListener('click', function(){
    alert("Título clicado")
});

function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}


