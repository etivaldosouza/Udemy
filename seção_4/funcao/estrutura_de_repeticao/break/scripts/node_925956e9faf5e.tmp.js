for(let i = 5; i < 20; i+5){
    console.log(`${i}`)
    if( i % 10 == 0){
        console.log(`saiu do loop`)
        break
    }
    console.log('prosseguindo o loop')
}