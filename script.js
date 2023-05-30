const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
        }
    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesenncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesenncriptada = stringDesenncriptada.toLowerCase()

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesenncriptada.includes(matrizCodigo[i][1])){
           stringDesenncriptada = stringDesenncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            
        }
    }
    return stringDesenncriptada
}