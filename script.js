const formulario = document.querySelector('#formulario')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const resultado = document.querySelector('#resultado')


function imc(altura,peso){
    return peso / ((altura/100)*(altura/100))
}

formulario.addEventListener('submit', (event)=>{
    event.preventDefault()

    const imc_calculado = document.createElement('h2')
    imc_calculado.textContent = `O seu IMC é: ${imc(altura.value,peso.value).toFixed(2)}`
    resultado.appendChild(imc_calculado)
})
