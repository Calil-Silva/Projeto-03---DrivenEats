document.getElementById("bordas").addEventListener("click", selecionarAtivo);
document.getElementById("bordas2").addEventListener("click", selecionarAtivo2);
document.getElementById("bordas3").addEventListener("click", selecionarAtivo3);
document.getElementById("bordas4").addEventListener("click", selecionarAtivo4);
document.getElementById("bordas5").addEventListener("click", selecionarAtivo5);

function selecionarAtivo() {
    document.getElementById("bordas").style.border = "5px solid rgba(50, 183, 47, 1)";
}
function selecionarAtivo2 () {
    document.getElementById("bordas2").style.border = "5px solid rgba(50, 183, 47, 1)";
}


function teste() {
if(selecionarAtivo2) {
    document.getElementById("bordas").style.border = "none";
}
} 

function teste2() {
    if(selecionarAtivo) {
        document.getElementById("bordas2").style.border = "none";
    } 
}