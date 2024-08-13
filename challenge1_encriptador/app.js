const text_area = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

function btn_encriptar() {
    const textoEncriptado = encriptar(text_area.value);
    mensaje.value = textoEncriptado;
    text_area.value = "";
    mensaje.style.backgroundImage = "none";
    document.querySelector(".enunciado_img").style.display = "none";
    document.querySelector(".informacion_img").style.display = "none";
}

function btn_desencriptar() {
    const textoEncriptado = desencriptar(text_area.value);
    mensaje.value = textoEncriptado;
    text_area.value = "";
}

function btn_copiar() {
    mensaje.select();
    document.execCommand("copy");
    //alert("Texto copiado al portapapeles");
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }
    }
    return stringEncriptado;

}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }
    }
    return stringDesencriptado;

}

text_area.addEventListener("input", function() {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    if (!regex.test(text_area.value)) {
        text_area.value = text_area.value.replace(/[^a-z\s]/g, "");
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
    }
});