const icon = document.querySelectorAll('#icon');

function handleClick() {
    this.classList.toggle('filled')
}

icon.forEach(item => {
    item.addEventListener('click', handleClick);
});