
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

let errorMessage = ""

//bug var bakacağım

nameInput.oninput = () =>{
  if(nameInput.value != "" && nameInput.value.length < 35){
    personalData.name = nameInput.value
  }
  if (nameInput.value.length < 2 && nameInput.value.length > 35) errorMessage += "  name, "
}
surnameInput.oninput = () =>{
  if(surnameInput.value != "" && surnameInput.value.length < 35){
    personalData.surname = surnameInput.value
  }
  if (surnameInput.value.length < 2 && surnameInput.value.length > 35) errorMessage += "  surname, "
}
ageInput.oninput = () =>{
  if(ageInput.value > 0 && ageInput.value < 125){
    personalData.age = ageInput.value
  } else {
    errorMessage += " age, "
    personalData.age = 0
  }
}
genderInput.oninput = () =>{
  let gender = genderInput.value.toLowerCase()

  if(gender != "m" || gender != 'w'){
    errorMessage += 'gender, '
  } else {
    personalData.gender = gender
  }
    
}

function submitNameSurnameAgeGender(){
  nameDisplaySpan.innerHTML = personalData.name
  surnameDisplaySpan.innerHTML = personalData.surname
  ageDisplaySpan.innerHTML = personalData.age
  genderDisplaySpan.innerHTML = personalData.gender
  errorDisplaySpan.innerHTML = errorMessage
}

submitNameSurnameAgeGenderButton.addEventListener('click', submitNameSurnameAgeGender)

//************
//************

//************
//************


// let vorName = prompt("Bitte schrein Ihre Vorname");
// let nachName = prompt("Bitte schrein Ihre Nachname");
// let alter = parseInt(prompt("Bitte schreib Ihre Alt"));
// let geschlecht = prompt("Bitte schreib Ihre geschelct als Mannlich(M) oder Weiblich(W)").toLowerCase();

// let errormessage = ""



// if (isNaN(vorName)){

//   if(vorName.length<2 || vorName.length>35){
//   errormessage +=" Falsche Vorname " 
//   }

//   if(nachName.length<2 || nachName.length>35){
//     errormessage +=" Falsche Nachname " 
//   } 

//   if(alter<0 || alter>125){
//     errormessage +=" Falsche Alter" 
//   }
//   if(geschlecht !="m"||geschlecht !="mannlich"|| geschlecht !="w"||geschlecht !="weiblich"){
//     errormessage +="Falsche geschelcht"
//   }

// } else {
//   alert("vorName string değil")
// }
// console.log("Ihre vorName = ",vorName );
// console.log("Ihre Name = ",nachName );
// console.log("Ihre Alter = ",alter );
// console.log("Ihre Geschlecht = ",geschlecht );

// alert(errormessage);
  