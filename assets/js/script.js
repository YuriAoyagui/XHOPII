function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imagemPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarPreco(botaoEscolhido){
    if (botaoEscolhido.id == "btnModeloPreto"){
        document.getElementById('precoProduto').innerHTML = "R$56,90";
        document.getElementById('qtdDisponivel').innerHTML = "171 peças dísponiveis";
    }

    else if (botaoEscolhido.id == "btnModeloAzul"){
        document.getElementById('precoProduto').innerHTML = "R$56,90";
        document.getElementById('qtdDisponivel').innerHTML = "152 peças dísponiveis";
    }

    else if (botaoEscolhido.id == "btnModeloVerde"){
        document.getElementById('precoProduto').innerHTML = "R$46,90";
        document.getElementById('qtdDisponivel').innerHTML = "264 peças dísponiveis";
    }

    else if (botaoEscolhido.id == "btnModeloCinza"){
        document.getElementById('precoProduto').innerHTML = "R$60,90";
        document.getElementById('qtdDisponivel').innerHTML = "117 peças dísponiveis";
    }

    else if (botaoEscolhido.id == "btnModeloRosa"){
        document.getElementById('precoProduto').innerHTML = "R$34,00";
        document.getElementById('qtdDisponivel').innerHTML = "318 peças dísponiveis";
    }
}

function mudarTamanho(salve){
    if (salve.id == "btnTamanhoP"){
        document.getElementById('tamanhoSelecionado').innerHTML ="Tamanho selecionado P";
    }

    else if (salve.id == "btnTamanhoM"){
        document.getElementById('tamanhoSelecionado').innerHTML ="Tamanho selecionado M";
    }

    else if (salve.id == "btnTamanhoG"){
        document.getElementById('tamanhoSelecionado').innerHTML ="Tamanho selecionado G";
    }

    else if (salve.id == "btnTamanhoGG"){
        document.getElementById('tamanhoSelecionado').innerHTML ="Tamanho selecionado GG";
    }
}