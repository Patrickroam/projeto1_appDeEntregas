let opcaoPrato;
let opcaoBebida;
let opcaoSobremes;


function selecionandoPrato(opcao) {

    const elementoSelecionadoPrato = document.querySelector('.prato.itemSelecionado');

    if (elementoSelecionadoPrato !== null) {
        elementoSelecionadoPrato.classList.remove('itemSelecionado');
    }

    opcao.classList.add('itemSelecionado');

    opcaoPrato = opcao;

    confirmandoPedido();
    innerHtmlPrato();

}

function selecionandoBebida(opcao) {

    const elementoSelecionadoBebida = document.querySelector('.bebida.itemSelecionado');

    if (elementoSelecionadoBebida !== null) {
        elementoSelecionadoBebida.classList.remove('itemSelecionado');
    }

    opcao.classList.add('itemSelecionado');

    opcaoBebida = opcao;

    confirmandoPedido();
    innerHtmlBebida();
}

function selecionandoSobremesa(opcao) {

    const elementoSelecionadoSobremesa = document.querySelector('.sobremesa.itemSelecionado');

    if (elementoSelecionadoSobremesa !== null) {
        elementoSelecionadoSobremesa.classList.remove('itemSelecionado');
    }

    opcao.classList.add('itemSelecionado');

    opcaoSobremes = opcao;

    confirmandoPedido();
    innerHtmlSobremesa();
}


function confirmandoPedido() {

    if (opcaoPrato !== undefined && opcaoBebida !== undefined && opcaoSobremes !== undefined) {
        const elementoPedido = document.querySelector('.rodape .botaoFinalizarPedido');
        elementoPedido.classList.add('botaoVerde');

        const elementoInnerHtml = document.querySelector('.rodape .botaoFinalizarPedido.botaoVerde .p');
        elementoInnerHtml.innerHTML = "Fechar Pedido";
    }



}

let arrayPrato = [];

function innerHtmlPrato() {

    let nomedoPrato = document.querySelector('.itemSelecionado .nomedoPrato');
    let valorPrato = document.querySelector('.itemSelecionado .valorPrato');

    arrayPrato[0] = nomedoPrato.innerHTML;
    arrayPrato[1] = parseFloat(valorPrato.innerHTML.replace(",", "."));
}

let arrayBebida = [];

function innerHtmlBebida() {

    let nomedaBebida = document.querySelector('.itemSelecionado .nomedaBebida');
    let valorBebida = document.querySelector('.itemSelecionado .valorBebida');

    arrayBebida[0] = nomedaBebida.innerHTML;
    arrayBebida[1] = parseFloat(valorBebida.innerHTML.replace(",", "."));
}

let arraySobremesa = [];

function innerHtmlSobremesa() {

    let nomedaSobremesa = document.querySelector('.itemSelecionado .nomedaSobremesa');
    let valorSobremesa = document.querySelector('.itemSelecionado .valorSobremesa');

    arraySobremesa[0] = nomedaSobremesa.innerHTML;
    arraySobremesa[1] = parseFloat(valorSobremesa.innerHTML.replace(",", "."));
}

const mensagem = '';

function totalPedido() {

    const total = (arrayPrato[1] + arrayBebida[1] + arraySobremesa[1]).toFixed(2);

    return total;
}

function PedidoCompleto() {

    const eleFinalizarPedido = document.querySelector('.botaoFinalizarPedido.botaoVerde');
    const eleContainerModal = document.querySelector('.containerModal');
    const elenOpaco = document.querySelector('.containerBody');

    if (eleFinalizarPedido !== null) {

        eleContainerModal.classList.add('containerModalAparente');
        elenOpaco.classList.add('containerBodyOpaco');
    }

    const mensagem =
        `- ${arrayPrato[0]}: R$${arrayPrato[1].toFixed(2)} <br><br>
        - ${arrayBebida[0]}: R$${arrayBebida[1].toFixed(2)} <br><br>
        - ${arraySobremesa[0]}: R$${arraySobremesa[1].toFixed(2)} <br><br>
        - Total: R$${totalPedido()}`;

    const elMensagem = document.querySelector('.mensagem');
    elMensagem.innerHTML = mensagem;
}

function mensagemWatsapp() {

    let urldamensagempronta = encodeURIComponent(
        "Olá, gostaria de fazer o pedido: \n" +
        "- Prato: " + arrayPrato[0] + "\n" +
        "- Bebida: " + arrayBebida[0] + " \n" +
        "- Sobremesa: " + arraySobremesa[0] + "\n" +
        "- Total: R$ " + totalPedido());

    window.location.href = "https://wa.me/?text=" + urldamensagempronta;
}

function cancelarPedido() {

    const eleContainerModal = document.querySelector('.containerModalAparente');
    const elenOpaco = document.querySelector('.containerBodyOpaco');

    if (elenOpaco !== null && eleContainerModal !== null) {

        eleContainerModal.classList.remove('containerModalAparente');
        elenOpaco.classList.remove('containerBodyOpaco');
    }
}