/*

    =>  Crie um array com 5 nomes, incluindo o seu
        
    =>  verifique se o seu nome existe no array

    =>  se existir imprima alguma mensagem no console

*/ 

let nomes = ['Karine','Carlos','Carol','Pedro','Etivaldo']


let maiusculas = nomes.map(nome => nome.toLocaleUpperCase())

if(maiusculas.includes('ETIVALDO')){
    console.log('Nome Existe')
}else{
    console.log('ñ existe')
}

