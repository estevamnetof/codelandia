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
const conteudoH2 = document.querySelectorAll('.conteudo h2');

const conteudoArray = [];

conteudoH2.forEach((elemento) => {
    const objetoH2 = {
        element: elemento.parentElement,
        text: elemento.textContent
    };

    conteudoArray.push(objetoH2);
});

busca.addEventListener('keyup', handleSearch);

function handleSearch() {
    const pesquisa = busca.value.toLocaleLowerCase();

    conteudoArray.forEach(item => {
        const itemBusca = item.text.toLocaleLowerCase();
        const elementoConteudo = item.element;

        if (itemBusca.includes(pesquisa)) {
            elementoConteudo.style.display = 'block';
        } else {
            elementoConteudo.style.display = 'none';
        }
    });
}