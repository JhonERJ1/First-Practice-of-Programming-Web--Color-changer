const caja = document.getElementById("caja")
const btn = document.getElementsByClassName("btn");
const btnColorInicial = document.getElementsByClassName("btn--colorinicial");
const colorInicial = getComputedStyle(caja).backgroundColor;

btn[0].addEventListener("click", () =>{
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  caja.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  btnColorInicial[0].classList.remove("btn--colorinicial--oculto")
})

btnColorInicial[0].addEventListener("click", () =>{
  caja.style.backgroundColor = colorInicial
  btnColorInicial[0].classList.add("btn--colorinicial--oculto")
})