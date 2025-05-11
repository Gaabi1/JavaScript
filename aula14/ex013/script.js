function contar() {
    var beg = document.getElementById('txtb')
    var fim = document.getElementById('txte')
    var passo = document.getElementById('txtp')

    if (beg.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO]verifique os dados e tente novamente')
    }else{
       window.alert('Tudo ok')
    }
}