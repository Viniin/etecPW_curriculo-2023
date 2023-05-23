import construirTela from "./criarObj.js";
import incluirNaTela from "./criarObj.js";

let listaTags = construirTela()

//console.log(listaTags[4])


listaTags[24].addEventListener('click', function(event){
    event.preventDefault()
    let inputs = document.querySelectorAll('input')

    let inputName = inputs[0].value
    let inputIdade = inputs[1].value
    let inputDataNasc = inputs[2].value
    let inputEndereco = inputs[3].value
    let inputCEP = inputs[4].value
    let inputEstado = inputs[5].value
    let inputEstadoCivil = inputs[6].value
    let inputEmail = inputs[7].value
    let inputTelefone = inputs[8].value
    let inputobjetivo = inputs[9].value
    let inputformacao = inputs[10].value
    let inputExperiencia = inputs[11].value





    let ps = document.querySelectorAll('p')
    

    window.location.href = `http://127.0.0.1:5500/etecPW_curriculo-2023-master/curriculo.html?nome=${inputName}&idade=${inputIdade}&dataNasc=${inputDataNasc}
    &endereco${inputEndereco}&CEP=${inputCEP}&estado=${inputEstado}&estadoCivil=${inputEstadoCivil}&email=${inputEmail}
    &telefone=${inputTelefone}&objetivo=${inputobjetivo}&formacao=${inputformacao}&expe=${inputExperiencia}`

    //event.target.parentElement.reset()

});


var pessoa = {
    nome: "asdf" ,
    nascimento: "asdf",
    endereco: "asfd",
    email: "asdf",
    telefone: "asdf",
    formacao: ["asdf","asdf","adf","asdfas"]

}

sessionStorage.setItem('pessoa', JSON.stringify(pessoa))