let gafanhotos;
let mariposas;
let joaninhas;

function pratoSelecionado(pratos) {
    gafanhotos = pratos;
    const removerPrato = document.querySelector(".pratos .boxShadowVerde");
    if (removerPrato !== null) {
        removerPrato.classList.remove("boxShadowVerde");
    }

    pratos.classList.add("boxShadowVerde");


    if (gafanhotos !== undefined && mariposas !== undefined && joaninhas !== undefined) {
        document.querySelector("h3").innerHTML = "Finalizar pedido";
        document.querySelector(".selecionarPedidos").style.backgroundColor = "rgba(50, 183, 47, 1)";
    }
}

function bebidaSelecionada(bebidinhas) {
    mariposas = bebidinhas;
    const removerBebida = document.querySelector(".bebidas .boxShadowVerde");
    if (removerBebida !== null) {
        removerBebida.classList.remove("boxShadowVerde");
    }

    bebidinhas.classList.add("boxShadowVerde");

    if (gafanhotos !== undefined && mariposas !== undefined && joaninhas !== undefined) {
        document.querySelector("h3").innerHTML = "Finalizar pedido";
        document.querySelector(".selecionarPedidos").style.backgroundColor = "rgba(50, 183, 47, 1)";
    }
}

function sobremesaSelecionada(sobremesinhas) {
    joaninhas = sobremesinhas;
    const removerSobremesa = document.querySelector(".sobremesas .boxShadowVerde");
    if (removerSobremesa !== null) {
        removerSobremesa.classList.remove("boxShadowVerde");
    }

    sobremesinhas.classList.add("boxShadowVerde");

    if (gafanhotos !== undefined && mariposas !== undefined && joaninhas !== undefined) {
        document.querySelector("h3").innerHTML = "Finalizar pedido";
        document.querySelector(".selecionarPedidos").style.backgroundColor = "rgba(50, 183, 47, 1)";
    }
}


