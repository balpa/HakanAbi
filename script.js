
// üzerinde işlem yapacağımız elementleri seçtiğimiz yer. kütüphane için import gibi düşünebilirsin.
let userInput = document.getElementById("input")
let inputSpan = document.getElementById('input-span')
let clearButton = document.getElementById('clear-button')
let inputTypeSpan = document.getElementById('input-type-span')
let nameInput = document.getElementById('name-input')
let surnameInput = document.getElementById('surname-input')
let ageInput = document.getElementById('age-input')
let genderInput = document.getElementById('gender-input')
let submitNameSurnameAgeGenderButton =  document.getElementById('submit-name-surname-age-gender')
let nameDisplaySpan = document.getElementById('name-span')
let surnameDisplaySpan = document.getElementById('surname-span')
let ageDisplaySpan = document.getElementById('age-span')
let genderDisplaySpan = document.getElementById('gender-span')
let errorDisplaySpan = document.getElementById('error-span')
let thorOldKilo = document.getElementById('thor-old-kilo-input')
let thorNewKilo = document.getElementById('thor-new-kilo-input')
let calculateKiloButton = document.getElementById('calculate-kilo-button')
let displayKiloDifferenceSpan = document.getElementById('display-kilo-difference')
let cookieName = document.getElementById('cookie-name')
let cookieValue = document.getElementById('cookie-value')
let submitCookieButton = document.getElementById('submit-cookie-button')
let clearCookieButton = document.getElementById('clear-cookies-button')
let emptyBox = document.getElementById('empty-box')
let displayCoordinates = document.getElementById('display-coordinates')



//************
//************
// INPUT BÖLÜMÜ
//************
//************

// input'ta her değişiklik olduğunda çalışır. (inputSpan'in değerini girdiğimiz değer yapıyor)
userInput.oninput = () => { 

  inputSpan.innerHTML = userInput.value 

  // isNaN = Not a Number. isNaN doğru gelirse string, gelmezse integer dedik. Exception'lar vardır **çok sağlıklı değil burası** 
  // float için else if yazıp input içinde "." var mı diye baktık.
  if (isNaN(userInput.value)){
    inputTypeSpan.innerHTML = 'string'
  } else if (userInput.value.includes('.')){
    inputTypeSpan.innerHTML = 'float'
  } else {
    inputTypeSpan.innerHTML = 'integer'
  }
}

// input'u ve yazdırdığımız yeri temizleme fonksiyonu
function clearInput() {
  inputSpan.innerHTML = ''
  userInput.value = ''
  inputTypeSpan.innerHTML = ''
}

// butona basıldığında ne yapılacağı. yazdığımız clearInput fonksiyonunu çağırıyoruz
clearButton.addEventListener('click', clearInput)

//************
//************
// NAME-SURNAME-AGE-GENDER
//************
//************

let personalData = {
  name: "",
  surname: "",
  age: 0,
  gender: ""
}

let errorMessage = []

nameInput.oninput = () =>{

  if(nameInput.value != "" && nameInput.value.length < 35){
    personalData.name = nameInput.value
  }
  if (nameInput.value.length < 2 && nameInput.value.length > 35) errorMessage.push("name")
}
surnameInput.oninput = () =>{

  if(surnameInput.value != "" && surnameInput.value.length < 35){
    personalData.surname = surnameInput.value
  }
  if (surnameInput.value.length < 2 && surnameInput.value.length > 35) errorMessage.push("surname")
}
ageInput.oninput = () =>{

  if(ageInput.value > 0 && ageInput.value < 125){
    personalData.age = ageInput.value
  } else {
    errorMessage.push("age")
    personalData.age = 0
  }
}
genderInput.oninput = () =>{

  let gender = genderInput.value.toLowerCase()

  if(gender != "m" && gender != 'w'){
    errorMessage.push("gender")
  } else {
    personalData.gender = gender
  }
    
}

function submitNameSurnameAgeGender(){
  nameDisplaySpan.innerHTML = personalData.name
  surnameDisplaySpan.innerHTML = personalData.surname
  ageDisplaySpan.innerHTML = personalData.age
  genderDisplaySpan.innerHTML = personalData.gender

  // kurduğumuz mantıkta her harf için hata mesajı ekliyor. Dolayısıyla set diyerek duplicate olanları temizleidk
  let uniqueErrorArray = [...new Set(errorMessage)]
  errorDisplaySpan.innerHTML = uniqueErrorArray
}

submitNameSurnameAgeGenderButton.addEventListener('click', submitNameSurnameAgeGender)

//************
//************
// THOR KILO :)
//************
//************

function calculatePercentage(){

  if (!isNaN(thorOldKilo.value) && !isNaN(thorNewKilo.value)){

    let newKilo = thorNewKilo.value
    let oldKilo = thorOldKilo.value

    let result = Math.abs((newKilo-oldKilo)*100)/oldKilo

    if (newKilo>oldKilo) displayKiloDifferenceSpan.innerHTML = `KG ${result.toFixed(2)}% increased. `
    else if (newKilo<oldKilo) displayKiloDifferenceSpan.innerHTML = `KG ${result.toFixed(2)}% decreased. `
    else displayKiloDifferenceSpan.innerHTML = "Same KG"

  } else {
    displayKiloDifferenceSpan.innerHTML = "Enter valid KG"
  }
}

calculateKiloButton.addEventListener('click', calculatePercentage)


//************
//************
// ADD COOKIE
//************
//************ 

function addCookie(){
  if (isNaN(cookieName.value) && isNaN(cookieValue.value) && 0<cookieName.value.length<15 && 0<cookieValue.length<15)
  document.cookie = `${cookieName.value}=${cookieValue.value}; path=/`
}

function clearCookies(){
  const clearCookies = document.cookie.split(';').forEach(cookie => 
  document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
}

submitCookieButton.addEventListener('click', addCookie)
clearCookieButton.addEventListener('click', clearCookies)


//************
//************
// CURSOR COORDINATES
//************
//************ 

let mouseX, mouseY
let windowH = window.innerHeight
let windowW = window.innerWidth

emptyBox.addEventListener('mousemove', handleMouseOver)
emptyBox.addEventListener('mouseleave', handleMouseLeave)

// mouse'un her hareketinde koordinatları yazıyor (ekrana göre koordinatlar)
function handleMouseOver(e){
  mouseX = e.clientX
  mouseY = e.clientY    

  displayCoordinates.innerHTML = `(${mouseX},${mouseY})`
  displayCoordinates.style.color = '#fff'
  displayCoordinates.style.position = 'fixed'
  displayCoordinates.style.top = (mouseY+10) + 'px'
  displayCoordinates.style.left = (mouseX+20) + 'px'

}

// mouse div'in dışına çıktığında koordinatları siler
function handleMouseLeave(e){
  displayCoordinates.innerHTML = ''
}