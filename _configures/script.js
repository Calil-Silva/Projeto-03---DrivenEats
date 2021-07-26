let pratoEscolhido;
let bebidaEscolhida;
let sobremesaEscolhida;
let precoPrato;
let msgEncode;

function pratoSelecionado(pratos) {
    pratoEscolhido = pratos;
    const removerPrato = document.querySelector(".pratos .boxShadowVerde");
    const pedidosFinalizados = document.querySelector(".selecionarPedidos");
    const pedidosFinalizados2 = document.querySelector(".pedidosSelecionados");
    if (removerPrato !== null) {
        removerPrato.classList.remove("boxShadowVerde");
    }

    pratos.classList.add("boxShadowVerde");


    if (pratoEscolhido !== undefined && bebidaEscolhida !== undefined && sobremesaEscolhida !== undefined) {
        prato = document.querySelector(".pratos .boxShadowVerde").id;
        bebida = document.querySelector(".bebidas .boxShadowVerde").id;
        sobremesa = document.querySelector(".sobremesas .boxShadowVerde").id;
        pedidosFinalizados.classList.add("esconder");
        pedidosFinalizados2.classList.remove("esconder");
    }
}

function bebidaSelecionada(bebidas) {
    bebidaEscolhida = bebidas;
    const removerBebida = document.querySelector(".bebidas .boxShadowVerde");
    const pedidosFinalizados = document.querySelector(".selecionarPedidos");
    const pedidosFinalizados2 = document.querySelector(".pedidosSelecionados");
    if (removerBebida !== null) {
        removerBebida.classList.remove("boxShadowVerde");
    }

    bebidas.classList.add("boxShadowVerde");

    if (pratoEscolhido !== undefined && bebidaEscolhida !== undefined && sobremesaEscolhida !== undefined) {
        prato = document.querySelector(".pratos .boxShadowVerde").id;
        bebida = document.querySelector(".bebidas .boxShadowVerde").id;
        sobremesa = document.querySelector(".sobremesas .boxShadowVerde").id;
        pedidosFinalizados.classList.add("esconder");
        pedidosFinalizados2.classList.remove("esconder");
    }
}

function sobremesaSelecionada(sobremesas) {
    sobremesaEscolhida = sobremesas;
    const removerSobremesa = document.querySelector(".sobremesas .boxShadowVerde");
    const pedidosFinalizados = document.querySelector(".selecionarPedidos");
    const pedidosFinalizados2 = document.querySelector(".pedidosSelecionados");
    if (removerSobremesa !== null) {
        removerSobremesa.classList.remove("boxShadowVerde");
    }

    sobremesas.classList.add("boxShadowVerde");

    if (pratoEscolhido !== undefined && bebidaEscolhida !== undefined && sobremesaEscolhida !== undefined) {
        prato = document.querySelector(".pratos .boxShadowVerde").id;
        bebida = document.querySelector(".bebidas .boxShadowVerde").id;
        sobremesa = document.querySelector(".sobremesas .boxShadowVerde").id;
        pedidosFinalizados.classList.add("esconder");
        pedidosFinalizados2.classList.remove("esconder");
    }
}

document.querySelector(".pedidosSelecionados").addEventListener("click", enviarMensagem);

function enviarMensagem() {
    precoPrato = document.querySelector(".boxShadowVerde .a").innerHTML;
    precoPrato = (Number(precoPrato.replace(",", ".").replace("R$", "").replace("\n", "").replace("<p>", "").replace("</p>", "").replace("\n", ""))).toFixed(2);

    precoBebida = document.querySelector(".boxShadowVerde .b").innerHTML;
    precoBebida = (Number(precoBebida.replace(",", ".").replace("R$", "").replace("\n", "").replace("<p>", "").replace("</p>", "").replace("\n", ""))).toFixed(2);

    precoSobremesa = document.querySelector(".boxShadowVerde .c").innerHTML;
    precoSobremesa = (Number(precoSobremesa.replace(",", ".").replace("R$", "").replace("\n", "").replace("<p>", "").replace("</p>", "").replace("\n", ""))).toFixed(2);

    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${(Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2)}`;

    let msgEncode = encodeURIComponent(mensagem);

    open('https://wa.me/?text=' + msgEncode, "_self");
}








