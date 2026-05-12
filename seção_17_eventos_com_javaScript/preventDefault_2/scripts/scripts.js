const form = document.querySelector('form')
const tarefaInp = document.getElementById('#tarefaInput')


function executaEvento(e){
    console.log(`tipo do evento`) 
}
form.addEventListener('submit',executaEvento)