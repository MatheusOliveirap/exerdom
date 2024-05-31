function aumentar(){
    var imagem = document.getElementById("img");
    var larguraAtual = imagem.offsetWidth;
    imagem.style.width = (larguraAtual + 10) + "px";
}

function diminuir(){
    var imagem = document.getElementById("img");
    var larguraAtual = imagem.offsetWidth;
    imagem.style.width = (larguraAtual - 10) + "px";
}