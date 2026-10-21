
function resultado(){

    console.log(`o resultado da média é:`)
}

function media(x,y){
    let m = (x+y)/2
    return setTimeout(media,2000)
}

media(2,3)