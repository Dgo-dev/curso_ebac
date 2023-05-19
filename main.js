const form = document.querySelector('form');
const a = document.getElementById('input-a')
const b = document.getElementById('input-b')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const resposta = document.querySelector('.resposta');
    const mensagemCampoA = ` O valor da campo <strong>A</strong> é maior que o valor do campo <strong>B</strong>`;
    const mensagemCampoB = ` O valor da campo <strong>B</strong> é maior que o valor do campo <strong>A</strong>` 

    const mensagemCamposIguais = ` O valor da campo <strong>B</strong> é igual ao do campo <strong>A</strong>`

    if(b.value > a.value) {
       resposta.innerHTML = mensagemCampoB;
       resposta.style.display = 'block';
    }   
    else if(b.value == a.value) {
      resposta.innerHTML = mensagemCamposIguais;
      resposta.style.display = 'block';
    } else {
        resposta.innerHTML = mensagemCampoA;
        resposta.style.display = 'block';
    }
})