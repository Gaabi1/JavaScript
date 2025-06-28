function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if (Number(fano.value)  == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO]verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        //criando um id img com javaScript
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if( fsex[0].checked) {
            genero = 'Homem'
            if( idade >= 0 && idade <= 15){
                img.setAttribute('src', 'bbh.png')
            }
            else{
                img.setAttribute('src', 'homem.png')
            }
        } else if (fsex[1].checked){
            genero= 'Mulher'
             if( idade >= 0 && idade <= 15){
                //criança
                img.setAttribute('src', 'bbm.png')
            }
            else{
                img.setAttribute('src', 'mulher.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}