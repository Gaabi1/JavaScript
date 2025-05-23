let num = document.querySelector('input#txtn')
let list = document.querySelector('input#selnum')
let res = document.querySelector('div#res')
let valores= []

function isNumber (n) {
    if (Number(n)>=1 && Number(n)<=100){
        return true
    }else {
        return false
    }
}

function inList (n, l){
    if(l .indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function verificar(){
    if (isNumber(num.value) && !inList(num.value, valores)) {
        window.alert('Tudo ok!')
    }else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
}