function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        let c =1 
        //Limpar tabuada
        tab.innerHTML= ''
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            //Seleciona o item
            item.value = `tab${c}`
            //Tab add um elemento filho
            tab.appendChild(item)
            c++
        }


    }
}