const form = document.querySelector('form')
const tarefaInp = document.getElementById('#tarefaInput')


function executaEvento(e){
    console.log(`tipo do evento: ${e.type}`) 
    console.log(tarefaInput.value)
    e.preventDefault()
}
form.addEventListener('submit',executaEvento)   