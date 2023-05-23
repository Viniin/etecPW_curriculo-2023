// let p = document.createElement('p');

// p.textContent = "Vinicius";

// body.appendChild(p);



let body = document.querySelector('body');
//0=container, 1=dadosPessoais, 2=Objetivo 3=textHab 4,5,6=textHabH2 7=textCon 8-apresentacao 9=nome 
//10= informacoes 11=sobremim 12=divs 13,14=textoSobreMIM  15=divdaFormação 16=DivExperiencia 17=textoFormacao
//18,19,20,21,23,24=Textoformacoes 25=textoExperiencia 26=textoExperiencia
let tags = ['div','h1', 'input', 'button'];
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

    // definindo variaveis
    listaTags[0].body='container'
    listaTags[1].textContent='nome:'
    listaTags[2].name='nome'
    listaTags[3].textContent='enviar'


    body.appendChild(listaTags[0]);

    // chamando css
    listaTags[0].classList.add('container')
    listaTags[2].classList.add('inputs')
    listaTags[3].classList.add('button')




    // chamando as variaveis

    listaTags[0].appendChild(listaTags[1]);
    listaTags[0].appendChild(listaTags[2]);
    listaTags[0].appendChild(listaTags[3]);
