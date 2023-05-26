// Preenchimento do coração
const icon = document.querySelectorAll('#icon');

function handleClick() {
    this.classList.toggle('filled');
}

icon.forEach(item => {
    item.addEventListener('click', handleClick);
});

// Pesquisa
const busca = document.querySelector('.header-busca input').value;
const conteudo = document.querySelectorAll('.conteudo');
const conteudoArray = Array.from(conteudo);

