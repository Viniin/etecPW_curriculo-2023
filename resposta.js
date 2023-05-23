window. print();


const urlParams = new URLSearchParams(window.location.search);


const nome = urlParams.get("nome") 
const idade = urlParams.get("idade")
const dataNasc = urlParams.get("dataNasc") 
const endereco = urlParams.get("endereco")
const CEP = urlParams.get("CEP")
const estado = urlParams.get("estado") 
const estadoCivil = urlParams.get("estadoCivil")
const email = urlParams.get("email") 
const telefone = urlParams.get("telefone")
const objetivo = urlParams.get("objetivo") 
const formacao = urlParams.get("formacao")
const expe = urlParams.get("expe")



console.log(nome)
console.log(idade)
console.log(dataNasc)
console.log(endereco)
console.log(estado)
console.log(estadoCivil)
console.log(email)
console.log(telefone)
console.log(formacao)
console.log(expe)


let body = document.querySelector('body');

let tags = ['div', 'div', 'div', 'div', 'div', 'div', 'div', 'div', 'div', 'h2', 'h2', 'h2', 'h3', 'h2',  
//DADOS VINDO DO FORMULARIO
'h1', 'h1', 'h3', 'h3', 'h3', 'h3', 'h3', 'h3', 'h3', 'h3', 'h3', 'h3', 'h3', 
//MERDA DOS TRAÇOS
'div', 'div', 'div', 'div', 'div'];
let listaTags = [];

    tags.forEach(tag => {
        let tagNovas = criaTags(tag)
        listaTags.push(tagNovas)
    });

    console.log(listaTags)
    
    // metodos fabrica
    function criaTags(tag) {
        let novaTags = document.createElement(tag);
        return novaTags
    }

//DECLARANDO O BODY
    listaTags[0].body='container'
    listaTags[1].body='dados'
    listaTags[2].body='foto'
    listaTags[3].body='informacoes'
    listaTags[4].body='objetivo'
    listaTags[5].body='contato'
    listaTags[6].body='nome'
    listaTags[7].body='formacao'
    listaTags[8].body='experiencia'
//DECLARANDO OS TEXTO FIXO
    listaTags[9].textContent='Sobre mim'
    listaTags[10].textContent='Objetivo'
    listaTags[11].textContent='Contato'
    listaTags[12].textContent=''
    listaTags[13].textContent='Formacão'
    listaTags[14].textContent='Experiencia'
//DECLARANDO OS TEXTO DO FURMULARIO
    //ESQUEDA 
    listaTags[15].textContent=nome;
    listaTags[16].textContent=idade+' Anos';
    listaTags[17].textContent=dataNasc;
    listaTags[18].textContent=endereco;
    listaTags[19].textContent=CEP
    listaTags[20].textContent=estado;
    listaTags[21].textContent=estadoCivil;
    listaTags[22].textContent=objetivo
    listaTags[23].textContent=email
    listaTags[24].textContent=telefone
    listaTags[25].textContent=formacao
    listaTags[26].textContent=expe

    //AS MERDA DOS TRAÇO
    listaTags[27].body='tracoEsq1'
    listaTags[28].body='tracoEsq2'
    listaTags[29].body='tracoEsq3'
    listaTags[30].body='tracoDir1'
    listaTags[31].body='tracoDir2'






// edicao do BODY
    listaTags[0].classList.add('container')
    listaTags[1].classList.add('dados')
    listaTags[2].classList.add('foto')
    listaTags[3].classList.add('informacao')
    listaTags[4].classList.add('objetivo')
    listaTags[5].classList.add('contato')
    listaTags[6].classList.add('nome')
    listaTags[7].classList.add('formacao')
    listaTags[8].classList.add('experiencia')

    listaTags[27].classList.add('tracoEsq')
    listaTags[28].classList.add('tracoEsq')
    listaTags[29].classList.add('tracoEsq')
    listaTags[30].classList.add('tracoDir')
    listaTags[31].classList.add('tracoDir')
    // TEXTO PRINCIPAIS
    listaTags[9].classList.add('tituloEsquerda')
    listaTags[10].classList.add('tituloEsquerda')
    listaTags[11].classList.add('tituloEsquerda')
    listaTags[12].classList.add('tituloDireita')
    listaTags[13].classList.add('tituloDireita')
    listaTags[14].classList.add('tituloDireita')

    // TEXTO FORMULARIO
    listaTags[15].classList.add('tituloDireita')
    listaTags[16].classList.add('textoForm')
    listaTags[17].classList.add('textoForm')
    listaTags[18].classList.add('textoForm')
    listaTags[19].classList.add('textoForm')
    listaTags[20].classList.add('textoForm')
    listaTags[21].classList.add('textoForm')
    listaTags[22].classList.add('textoForm')
    listaTags[23].classList.add('textoForm')
    listaTags[24].classList.add('textoForm')
    listaTags[25].classList.add('tituloDireita')
    listaTags[26].classList.add('tituloDireita')





//CONTAINER
    body.appendChild(listaTags[0]);
//CONTAINER ESQUEDA
    listaTags[0].appendChild(listaTags[1]);

    //FOTO
    listaTags[1].appendChild(listaTags[2]);

    //INFORMAÇÕES
    listaTags[1].appendChild(listaTags[3]);
        //TXT
    listaTags[3].appendChild(listaTags[9]);
    listaTags[3].appendChild(listaTags[27]);
    listaTags[3].appendChild(listaTags[16]);
    listaTags[3].appendChild(listaTags[17]);
    listaTags[3].appendChild(listaTags[18]);
    listaTags[3].appendChild(listaTags[19]);
    listaTags[3].appendChild(listaTags[20]);
    listaTags[3].appendChild(listaTags[21]);


    //OBJETIVO
    listaTags[1].appendChild(listaTags[4]);
        //TXT
    listaTags[4].appendChild(listaTags[10]);
    listaTags[4].appendChild(listaTags[28]);
    listaTags[4].appendChild(listaTags[22]);

    //CONTATO
    listaTags[1].appendChild(listaTags[5]);
        //TXT
    listaTags[5].appendChild(listaTags[11]);
    listaTags[5].appendChild(listaTags[29]);
    listaTags[5].appendChild(listaTags[23]);
    listaTags[5].appendChild(listaTags[24]);
    
//CONTAINER DA DIREITA
    listaTags[0].appendChild(listaTags[6]);
    listaTags[6].appendChild(listaTags[12]);
    listaTags[6].appendChild(listaTags[15]);


    //FORMAÇÃO
    listaTags[6].appendChild(listaTags[7]);
        //TXT
    listaTags[7].appendChild(listaTags[13]);
    listaTags[7].appendChild(listaTags[30]);
    listaTags[7].appendChild(listaTags[25]);

    //EXPERIENCIA
    listaTags[6].appendChild(listaTags[8]);
        //TXT
    listaTags[8].appendChild(listaTags[14]);
    listaTags[8].appendChild(listaTags[31]);
    listaTags[8].appendChild(listaTags[26]);




let pessoa = JSON.parse(sessionStorage.getItem('pessoa'))

console.log(pessoa)