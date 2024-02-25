
const key = "d9f6b622c4206d94c5bead9e5efc73c5"

function colocarDadosNaTela(dados) {
    document.querySelector("#temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector("#cidade").innerHTML = dados.name
    document.querySelector("#umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector("#clima").innerHTML = dados.weather[0].description
    document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector("#fahrenheit").innerHTML = Math.floor(dados.main.temp)*9 /5 +32 +"°F"
}
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados) 
}
function clicarNoBotão() {
    const cidade = document.querySelector("input").value

    buscarCidade(cidade)
}