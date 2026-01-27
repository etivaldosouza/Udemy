function getInputValue(p) {
    const dom = document.querySelector('#'+p);
    return dom.value;
}



try {
    const val = getInputValue('campos');
    alert(val);
} catch (e) {
    alert('deu erro: '+ e.message)
    
}

alert("Fim do Programa");
