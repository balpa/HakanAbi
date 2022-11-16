import albumData from './data/katalog.json' assert {type: 'json'}


// üzerinde işlem yapacağımız elementleri seçtiğimiz yer. kütüphane için import gibi düşünebilirsin.
let userInput = document.getElementById("input")
let inputSpan = document.getElementById('input-span')
let clearButton = document.getElementById('clear-button')
let inputTypeSpan = document.getElementById('input-type-span')
let nameInput = document.getElementById('name-input')
let surnameInput = document.getElementById('surname-input')
let ageInput = document.getElementById('age-input')
let genderInput = document.getElementById('gender-input')
let submitNameSurnameAgeGenderButton = document.getElementById('submit-name-surname-age-gender')
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
let biletCekButton = document.getElementById('bilet-cek')
let numaraCekButton = document.getElementById('numara-cek')
let biletSpan = document.getElementById('bilet-span')
let numaralarDiv = document.getElementById('numaralar-div')
let lotoSifirlaButton = document.getElementById('loto-sifirla')
let fetchButton = document.getElementById('fetch-button')
let displayFetchedData = document.getElementById('display-fetched-data')
let fetchDataContainer = document.getElementById('fetch-data-container')
let displayDataContainer = document.getElementById('display-data-container')
let clearDataButton = document.getElementById('clear-data-button')
let albumNextButton = document.getElementById('next-album-button')
let albumPreviousButton = document.getElementById('previous-album-button')
let albumContents = document.getElementById('album-contents')
let albumNumber = document.getElementById('album-number')




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
  if (isNaN(userInput.value)) {
    inputTypeSpan.innerHTML = 'string'
  } else if (userInput.value.includes('.')) {
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

nameInput.oninput = () => {

  if (nameInput.value != "" && nameInput.value.length < 35) {
    personalData.name = nameInput.value
  }
  if (nameInput.value.length < 2 && nameInput.value.length > 35) errorMessage.push("name")
}
surnameInput.oninput = () => {

  if (surnameInput.value != "" && surnameInput.value.length < 35) {
    personalData.surname = surnameInput.value
  }
  if (surnameInput.value.length < 2 && surnameInput.value.length > 35) errorMessage.push("surname")
}
ageInput.oninput = () => {

  if (ageInput.value > 0 && ageInput.value < 125) {
    personalData.age = ageInput.value
  } else {
    errorMessage.push("age")
    personalData.age = 0
  }
}
genderInput.oninput = () => {

  let gender = genderInput.value.toLowerCase()

  if (gender != "m" && gender != 'w') {
    errorMessage.push("gender")
  } else {
    personalData.gender = gender
  }

}

function submitNameSurnameAgeGender() {
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

function calculatePercentage() {

  if (!isNaN(thorOldKilo.value) && !isNaN(thorNewKilo.value)) {

    let newKilo = thorNewKilo.value
    let oldKilo = thorOldKilo.value

    let result = Math.abs((newKilo - oldKilo) * 100) / oldKilo

    if (newKilo > oldKilo) displayKiloDifferenceSpan.innerHTML = `KG ${result.toFixed(2)}% increased. `
    else if (newKilo < oldKilo) displayKiloDifferenceSpan.innerHTML = `KG ${result.toFixed(2)}% decreased. `
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

function addCookie() {
  if (isNaN(cookieName.value) && isNaN(cookieValue.value) && 0 < cookieName.value.length < 15 && 0 < cookieValue.length < 15)
    document.cookie = `${cookieName.value}=${cookieValue.value}; path=/`
}

function clearCookies() {
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
function handleMouseOver(e) {
  mouseX = e.clientX
  mouseY = e.clientY

  displayCoordinates.innerHTML = `(${mouseX},${mouseY})`
  displayCoordinates.style.color = '#fff'
  displayCoordinates.style.position = 'fixed'
  displayCoordinates.style.top = (mouseY + 10) + 'px'
  displayCoordinates.style.left = (mouseX + 20) + 'px'

}

// mouse div'in dışına çıktığında koordinatları siler
function handleMouseLeave(e) {
  displayCoordinates.innerHTML = ''
}


//************
//************
// LOTO
//************
//************ 

biletCekButton.addEventListener('click', biletYarat)
numaraCekButton.addEventListener('click', numaraYarat)
lotoSifirlaButton.addEventListener('click', lotoSifirla)

let altiliBilet = []
let numaralar = []

function biletYarat() {

  // aynı sayının gelmeme durumunu yapmadım bakıcam bir ara / numaraları sıralamak lazım
  if (altiliBilet.length < 6) {
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 49)
      altiliBilet.push(num)
    }
    // if (new Set(altiliBilet).length !== altiliBilet.length) {
    //   altiliBilet.push(Math.floor(Math.random() * 49))
    // }
  }

  let altiliBiletText = ""

  altiliBilet.map((item, index) => {
    if (index != altiliBilet.length - 1) altiliBiletText += `${item}-`
    else altiliBiletText += `${item}`
  })

  biletSpan.innerHTML = altiliBiletText
}

function numaraYarat() {

  let numara = Math.floor(Math.random() * 48 + 1) // 0 ile 48 arasında bulup 1 ekliyoruz 0 gelmesin diye 1-49 oluyor
  numaralar.push(numara)

  if (numaralar.length <= 6) {
    let numaraSpan = document.createElement('span')
    numaraSpan.style.fontSize = "25px"
    numaralar.length == 6 ? numaraSpan.innerHTML = `${numara}` : numaraSpan.innerHTML = `${numara}-`
    numaralarDiv.appendChild(numaraSpan)
  }
}

function lotoSifirla() {

  altiliBilet = []
  numaralar = []
  biletSpan.innerHTML = ""
  while (numaralarDiv.firstChild) {
    numaralarDiv.removeChild(numaralarDiv.firstChild);
  }
}

//************
//************
// FETCHING DATA
//************
//************ 

fetchButton.addEventListener('click', fetchData)
clearDataButton.addEventListener('click', clearFetchedData)

let data

async function fetchData() {
  const URL = "https://random-data-api.com/api/v2/beers"

  while (displayDataContainer.firstChild) {
    displayDataContainer.removeChild(displayDataContainer.firstChild);
  }

  await fetch(URL)
    .then(response => response.json())
    .then(result => data = result)

  Object.entries(data).forEach((item) => {
    let createSpan = document.createElement('span')
    createSpan.innerHTML = `${item[0].toUpperCase()}: ${item[1]}`
    displayDataContainer.appendChild(createSpan)
  })
}

function clearFetchedData() {
  data = null
  while (displayDataContainer.firstChild) {
    displayDataContainer.removeChild(displayDataContainer.firstChild);
  }
}


//************
//************
// ALBUM CATALOG
//************
//************

albumNextButton.addEventListener('click', nextAlbum)
albumPreviousButton.addEventListener('click', previousAlbum)

let currentAlbum = 0 // sayfa açılınca sıfırıncı albümü gösterdik

albumContents.innerHTML = `
<h1>${albumData.catalog[0].artist}</h1><br>
<h3>${albumData.catalog[0].title}</h3><br>
<h4>${albumData.catalog[0].year}</h4><br>
<h4>${albumData.catalog[0].company}</h4><br>
<h4>$${albumData.catalog[0].price}</h4><br>
`
albumNumber.innerHTML = `<h5>${currentAlbum + 1}/${albumData.catalog.length}</h5>`

function checkAndWriteAlbumNumber() {
  albumNumber.innerHTML = `<h5>${currentAlbum + 1}/${albumData.catalog.length}</h5>`
}


function nextAlbum() {
  currentAlbum++

  if (currentAlbum == albumData.catalog.length) currentAlbum = 0

  albumContents.innerHTML = `
  <h1>${albumData.catalog[currentAlbum].artist}</h1><br>
  <h3>${albumData.catalog[currentAlbum].title}</h3><br>
  <h4>${albumData.catalog[currentAlbum].year}</h4><br>
  <h4>${albumData.catalog[currentAlbum].company}</h4><br>
  <h4>$${albumData.catalog[currentAlbum].price}</h4><br>
  `
  checkAndWriteAlbumNumber()
}

function previousAlbum() {
  currentAlbum--

  if (currentAlbum < 0) currentAlbum = albumData.catalog.length - 1

  albumContents.innerHTML = `
  <h1>${albumData.catalog[currentAlbum].artist}</h1><br>
  <h3>${albumData.catalog[currentAlbum].title}</h3><br>
  <h4>${albumData.catalog[currentAlbum].year}</h4><br>
  <h4>${albumData.catalog[currentAlbum].company}</h4><br>
  <h4>$${albumData.catalog[currentAlbum].price}</h4><br>
  `
  checkAndWriteAlbumNumber()
}