// Preenchimento do coração
const icon = document.querySelectorAll('#icon');

function handleClick() {
    this.classList.toggle('filled');
}

icon.forEach(item => {
    item.addEventListener('click', handleClick);
});

// Pesquisa
const busca = document.querySelector('.header-busca input');
const conteudo = document.querySelectorAll('.conteudo');
const conteudoH2 = document.querySelectorAll('.conteudo h2');

const conteudoArray = [];

conteudoH2.forEach((elemento) => {
    const objetoH2 = {
        text: elemento.textContent
    };

    conteudoArray.push(objetoH2);
});

busca.addEventListener('keydown', handleSearch);

function handleSearch() {
    const pesquisa = busca.value;

    const resultado = conteudoArray.filter(item => {
        return item.text.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase());
    });

    if (pesquisa === '') return;

    resultado.forEach(item => {
        const elementoEncontrado = conteudo.find(elemento => elemento.textContent.toLocaleLowerCase() === item.text.toLocaleLowerCase());
        if (elementoEncontrado) {
            elementoEncontrado.classList.add('green');
        }
    });

    console.log(resultado);
}