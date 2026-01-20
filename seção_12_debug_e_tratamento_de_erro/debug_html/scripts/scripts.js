const input = document.querySelector(".ipt")
const button = document.querySelector(".btn")

console.log(input) //*vai apontar null no console.log do inspecionar pois o valor da class está !=(ite).
  

button.addEventListener('click', () => {
    console.log(input.value)
})