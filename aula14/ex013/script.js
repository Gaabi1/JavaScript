function contar() {
    let beg = document.getElementById('txtb')
    let fim = document.getElementById('txte')
    let passo = document.getElementById('txtp')
    let resp = document.getElementById('resp')


    if (beg.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        resp.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO]verifique os dados e tente novamente')
    }else{
        resp.innerHTML = 'Contando: '
        let b = Number(beg.value)
        let e = Number(fim.value)
        let p = Number(passo.value)

        for( let i = b; i<= e; i+= p){
            resp.innerHTML += `${i} `
        }
    }
}