let cx1 = document.querySelector('#caixa1')

let cursos = [...document.querySelectorAll('.curso')]

cx1.addEventListener('click',function(event){
    alert('clicou em caixa 1')
     // o eventos do elemento que é descendente de c1(div caixa1) ñ vai ser disparado
})

cursos.map((el)=>{
    el.addEventListener('click',function(e){
        alert('clicou no curso')
        e.stopPropagation()
        
    })
})
