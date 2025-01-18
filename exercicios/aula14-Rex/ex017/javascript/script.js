function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'img/bebehomem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'img/bebemulher.png')

            } else if (idade < 21){
                img.setAttribute('src', 'img/jovemmulher.png')
            } else if (idade < 50) {
                //adulto
                setAttribute('src', 'img/adultomulher.png')
            } else {
                //idoso
                setAttribute('src', 'img/idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
