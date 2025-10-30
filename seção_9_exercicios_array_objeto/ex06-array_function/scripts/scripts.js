/*

    => Crie dois Arrays, um com mais de 5 elementos e outro com menos

    => Faça uma função que verifica o número de elementos

    => Se possuir menos que 5, imprima "Poucos elementos" no console

    => Se tiver mais, imprima "Muitos elementos"

*/ 


let arr1 = ['Lia','Denis','Miranda','Junior']

let arr2 = ['Neto','Pedro','Carlos','José','Paula','Roberta','Julia']

function verifica(a){
    if(a.length < 5){
        console.log("Poucos elementos")
    }else{
        console.log("Muitos elementos")
    }
}


verifica(arr1)
verifica(arr2)