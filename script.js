let userInput = document.getElementById("input")
let displayH1 = document.getElementById('display')
let button = document.getElementById('button')


userInput.oninput = () => {
  displayH1.innerHTML = userInput.value
}

function clearInput() {
  displayH1.innerHTML = ''
  userInput.value = ''
}

button.addEventListener('click', clearInput)