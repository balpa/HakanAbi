
// üzerinde işlem yapacağımız elementleri seçtiğimiz yer. kütüphane için import gibi düşünebilirsin.
let userInput = document.getElementById("input")
let inputSpan = document.getElementById('input-span')
let clearButton = document.getElementById('clear-button')
let inputTypeSpan = document.getElementById('input-type-span')

//*************
// INPUT BÖLÜMÜ

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