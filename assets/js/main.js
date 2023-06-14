function calculaIMC() {
    document.querySelector('button').addEventListener('click', (event) => {
        event.preventDefault();
    
        let peso = document.querySelector('#input-peso');
        let altura = document.querySelector('#input-altura');
        const resultado = document.querySelector('.resultado');
       
        let calculoImc = peso.value / (altura.value * altura.value);
       
        if (calculoImc <= 18.5) {
            resultado.innerHTML = `<span>O seu imc é ${calculoImc.toFixed(2)} (Abaixo do peso)</span>`
            resultado.style.background = '#f1c40f'
        }
        else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
            resultado.innerHTML = `<span>O seu imc é ${calculoImc.toFixed(2)} (Peso Normal)</span>`
            resultado.style.background = '#2ecc71'
        }
        else if(calculoImc >=25.9 && calculoImc <= 29.9) {
            resultado.innerHTML = `<span>O seu imc é ${calculoImc.toFixed(2)} (Sobrepeso)</span>`
            resultado.style.background = '#e67e22'
        }
        else if(calculoImc >= 30 && calculoImc <= 34.9) {
            resultado.innerHTML = `<span>O seu imc é ${calculoImc.toFixed(2)} (Obesidade grau 1)</span>`
            resultado.style.background = '#f39c12'
        }
        else if(calculoImc >= 35 && calculoImc <= 39.9) {
            resultado.innerHTML = `<span>O seu imc é ${calculoImc.toFixed(2)} (Obesidade grau 2)</span>`
            resultado.style.background = '#e74c3c'
        }
        else {
            resultado.innerHTML = `<span>O seu imc é ${calculoImc.toFixed(2)} (Obesidade grau 3)</span>`
            resultado.style.background = '#c0392b'
        }
        
        peso.value = ''
        altura.value = ''
    })
}

calculaIMC();

