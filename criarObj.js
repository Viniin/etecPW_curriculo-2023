
var listaTags = []
var body = document.querySelector('body')
var form = document.querySelector('form')

const pictureImage = document?.querySelector(".picture__image");

export default function construirTela(){

    

    incluirNaTela()
    listaTags[0].textContent = 'Nome'
    listaTags[1].name = 'nome'
    listaTags[2].textContent = 'Idade '
    listaTags[3].name = 'idade'
    listaTags[4].textContent = 'Data Nascimento '
    listaTags[5].name = 'dataNasc'
    listaTags[6].textContent = 'Endereço'
    listaTags[7].name = 'endereco'
    listaTags[8].textContent = 'CEP'
    listaTags[9].name = 'CEP'
    listaTags[10].textContent = 'Estado'
    listaTags[11].name = 'estado'
    listaTags[12].textContent = 'Estado Civil'
    listaTags[13].name = 'estadoCivil'
    listaTags[14].textContent = 'Email'
    listaTags[15].name = 'email'
    listaTags[16].textContent = 'Telefone'
    listaTags[17].name = 'telefone'
    listaTags[18].textContent = 'Objetivo'
    listaTags[19].name = 'objetivo'

//add
    listaTags[29].classList.add('container')
    listaTags[30].classList.add('forms')
    listaTags[31].classList.add('alingmentInputs')
    listaTags[32].classList.add('alingmentModel')
    listaTags[34].classList.add('modelo')


    // Colocando forms dentro do container
    listaTags[29].appendChild(listaTags[30])

    // Colocando inputs dentro do forms
    listaTags[30].appendChild(listaTags[31])
    listaTags[30].appendChild(listaTags[32])

    
    // Colocando alignment dentro do forms
    listaTags[31].appendChild(listaTags[0])
    listaTags[31].appendChild(listaTags[1])
    listaTags[31].appendChild(listaTags[2])
    listaTags[31].appendChild(listaTags[3])
    listaTags[31].appendChild(listaTags[4])
    listaTags[31].appendChild(listaTags[5])
    listaTags[31].appendChild(listaTags[6])
    listaTags[31].appendChild(listaTags[7])
    listaTags[31].appendChild(listaTags[8])
    listaTags[31].appendChild(listaTags[9])
    listaTags[31].appendChild(listaTags[10])
    listaTags[31].appendChild(listaTags[11])
    listaTags[31].appendChild(listaTags[12])
    listaTags[31].appendChild(listaTags[13])
    listaTags[31].appendChild(listaTags[14])
    listaTags[31].appendChild(listaTags[15])
    listaTags[31].appendChild(listaTags[16])
    listaTags[31].appendChild(listaTags[17])
    listaTags[31].appendChild(listaTags[18])
    listaTags[31].appendChild(listaTags[19])
    listaTags[31].appendChild(listaTags[20])
    listaTags[31].appendChild(listaTags[21])
    listaTags[31].appendChild(listaTags[22])
    listaTags[31].appendChild(listaTags[23])
    listaTags[31].appendChild(listaTags[25])
    listaTags[31].appendChild(listaTags[26])

    // Colocando alignment dentro do forms
    listaTags[32].appendChild(listaTags[33])
    listaTags[32].appendChild(listaTags[34])
    listaTags[32].appendChild(listaTags[24])


    listaTags[25].classList.add('section__formacao')
    listaTags[25].appendChild(listaTags[20])
    listaTags[25].appendChild(listaTags[21])
    listaTags[25].appendChild(listaTags[27])

 
    listaTags[20].textContent = 'Formação'
    listaTags[21].name = 'formacao'
    listaTags[27].textContent = '+'

    listaTags[26].classList.add('section__formacao')
    listaTags[26].appendChild(listaTags[22])
    listaTags[26].appendChild(listaTags[23])
    listaTags[26].appendChild(listaTags[28])

    listaTags[22].textContent = 'Experiência'
    listaTags[23].name = 'Experiencia'
    listaTags[28].textContent = '+'
    listaTags[24].textContent = 'Criar curriculo'
    listaTags[33].textContent = 'Modelo do curriculo'
    listaTags[34].src = './img/modelo.png'


    return listaTags
};



export  function incluirNaTela(){
    
    let tag = ['label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input'
    , 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input',
     'button',
    //div 26 e 25
    'div', 'div',
    //botao de adicionar 26
    'button', 'button',
    //Container e forms e aligmentInput e aligmentModel 
    'div', 'div','div','div',
    // Imagem modelo curriculo e titulo forms
    'h1','img'


    //adicionais
    ];
    tag.forEach(t => {
        listaTags = criarTags(t)
    });
    console.log(listaTags)
    
    return tag
};


function criarTags(tag){
    //criando uma tag
    let novaTag = document.createElement(tag)
    // inclui na lista
    listaTags.push(novaTag)
    form.appendChild(novaTag)
    return listaTags
}

