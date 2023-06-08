const editaTitulos = document.querySelectorAll('h1');
console.log(editaTitulos)

editaTitulos.forEach((titulo) => {
    titulo.addEventListener('click', () => {
        titulo.classList.toggle('mudarCor');
    })
})