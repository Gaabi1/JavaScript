let timeoutId; 

function mostrarMensagem() {
    timeoutId = setTimeout(() => {
        document.getElementById('res').innerHTML = 'Olá, Mundo!';
    }, 2000);
}

function pararMensagem() {
    clearTimeout(timeoutId);
    document.getElementById('res').innerHTML = 'Mensagem parada!';
}