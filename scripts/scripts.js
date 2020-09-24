function carregamento() {

    let data = new Date()
    let img = window.document.getElementById("imagem")
    let msg = window.document.getElementById("mensagem")
    let saudacao = window.document.getElementById("saudacao")
    let local = 'pt-BR'
    let hora = data.getHours()

    let dia = data.toLocaleDateString(local, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    let horario = data.toLocaleTimeString(local, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    msg.innerHTML = `${dia}, ${horario}`

    setInterval(() => {

        let data = new Date()

        let dia = data.toLocaleDateString(local, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })

        let horario = data.toLocaleTimeString(local, {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })

        msg.innerHTML = `${dia}, ${horario}`

    }, 1000)

    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = '#e2cd9f'
        saudacao.innerHTML = `Bom dia!`
        window.document.getElementById("secao").style.background = '#dab25e'
    } else if (hora < 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#917752'
        saudacao.innerHTML = `Boa tarde!`
        window.document.getElementById("secao").style.background = '#aaac57'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = '#72939c'
        saudacao.innerHTML = `Boa noite!`
        window.document.getElementById("secao").style.background = '#444d61'

    }

}