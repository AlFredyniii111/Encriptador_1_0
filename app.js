// Declaración de variables
const textInput = document.getElementById("text-input");
const outputText = document.getElementById("output-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");

// Función para validar el texto (solo letras minúsculas y sin caracteres especiales)
function isValidText(text) {
  const regex = /^[a-z\s]*$/;
  return regex.test(text);
}

// Función para encriptar el texto
function encryptText(text) {
  let encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptedText;
}

// Función para descifrar el texto
function decryptText(text) {
  let decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
}

// Evento para el botón de encriptar
encryptBtn.addEventListener("click", function () {
  const text = textInput.value;
  if (isValidText(text)) {
    outputText.value = encryptText(text);
  } else {
    alert(
      "Por favor, ingrese solo letras minúsculas y sin caracteres especiales."
    );
  }
});

// Evento para el botón de descifrar
decryptBtn.addEventListener("click", function () {
  const text = textInput.value;
  if (isValidText(text)) {
    outputText.value = decryptText(text);
  } else {
    alert(
      "Por favor, ingrese solo letras minúsculas y sin caracteres especiales."
    );
  }
});

// Evento para el botón de copiar
copyBtn.addEventListener("click", function () {
  navigator.clipboard
    .writeText(outputText.value)
    .then(() => {
      alert("Texto copiado al portapapeles.");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
});
