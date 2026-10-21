// selecionar elemento

const root = document.documentElement;
const btn = document.getElementById('btnTema');
const ano = document.getElementById('ano')


//preenchendo ano atual:
ano.textContent = new Date().getFullYear()

// tema ligth/dark

btn.addEventListener('click',function(){
    const escuro = root.getAttribute('data-tema') === 'escuro'

    if(escuro){
        root.removeAttribute('data-tema')
        localStorage.setItem('tema', 'claro')
    }else{
        root.setAttribute('data-tema','escuro')
        localStorage.setItem('tema', 'escuro')
    }
})


