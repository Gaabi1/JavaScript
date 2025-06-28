let intervalId;
let x = 0;

function mostrarMensagem() {
    intervalId= setInterval(()=> {
        x = x + 1;
        document.getElementById('res').innerHTML = x;
    }, 1000);}

function pararMensagem() {
    clearInterval(intervalId);
    document.getElementById('res').innerHTML = 'Mensagem parada!';
}