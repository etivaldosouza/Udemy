/*
    estrutura condicional switch:

=>  quando há a necessidade de vários ifs, podemos utilizar o switch/case

=> para sair de um case podemos utlizar o break

=> podemos inserir uma expressão default, para caso nenhum valor for correspondido

=> muitos programadores optam por usar vários if;

*/


/*
    dias da semana em JS:

    0: domingo
    1: segunda
    2: terça
    3: quarta
    4: quinta
    5: sexta
    6: sábado
    
*/ 

// exemplo 1:
// switch/case para definir o almoço do dia da semana

switch (new Date().getDay()) {
    case 0: 
        console.log('arroz e batata frita')
        break;
    case 1: 
        console.log('arroz e feijão') 
        break;
    case 2:
        console.log('arroz e salada')
        break;      
    case 3: 
        console.log('arroz e frango')
        break;
    case 4: 
        console.log('arroz e peixe')
        break;
    case 5: 
        console.log('arroz e macarrão')
        break;  
    case 6: 
        console.log('arroz e strogonoff')
        break;  
    default: 
        console.log('sem almoço definido')
        break;
}



// exemplo 2:

let dia = new Date().getDay(); // obtém o dia atual da semana (0-6)

switch (dia) {
    case 0: 
        console.log('Hoje é domingo');
        break;
    case 1: 
        console.log('Hoje é segunda-feira');
        break;  
    case 2:
        console.log('Hoje é terça-feira');  
        break;
    case 3: 
        console.log('Hoje é quarta-feira');
        break;
    case 4: 
        console.log('Hoje é quinta-feira'); 
        break;
    case 5:         
        console.log('Hoje é sexta-feira');
        break;
    case 6: 
        console.log('Hoje é sábado');
        break;
    default:    
        console.log('Dia inválido');
        break;
}