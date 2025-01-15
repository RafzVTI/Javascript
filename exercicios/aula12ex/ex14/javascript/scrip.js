function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'Imagens/manhap2.png'
        document.body.style.background = '#D98E04'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'Imagens/tardep2.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'Imagens/noitep2.png'
        document.body.style.background = '#836AA6'
    }
}