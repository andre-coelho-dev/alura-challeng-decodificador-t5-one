const textArea = document.querySelector(".digiteSeuTexto");
const mensagem = document.querySelector("#myTextArea");

function btnEncriptar() {
  mensagem.style.backgroundImage = "none";
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  
  let matrizCodigo = [["e" , "enter"] , 
    ["i" , "imes"] , 
    ["a" , "ai"] , 
    ["o" , "ober"] , 
    ["u" , "ufat"]];
  
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  mensagem.style.backgroundImage = "none";
  const textoEncriptado = desencriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e" , "enter"] , 
    ["i" , "imes"] , 
    ["a" , "ai"] , 
    ["o" , "ober"] , 
    ["u" , "ufat"]];
  
    stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) { 
    if(stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

function btnCopiar () {
  const texto = mensagem.value;
  mensagem.style.backgroundImage = "";
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado para a área de transferência: " + texto);
    })
    .catch((error) => {
      alert("Erro ao copiar o texto: ", error);
    });
  mensagem.value = "";
}