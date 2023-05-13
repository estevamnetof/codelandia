const icon = document.querySelectorAll('#icon');

function handleClick(event) {
    console.log(event.target.getAttribute('src'))
    event.target.src = 'images/heart-full.svg'
}

icon.forEach(item => {
    item.addEventListener('click', handleClick);
});