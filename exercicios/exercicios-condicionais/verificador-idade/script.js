function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente!')
    } else {
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/rounded_bebe-homem.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'imgs/rounded_jovem-homem.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imgs/rounded_adulto-homem.png')
            } else {
                img.setAttribute('src', 'imgs/rounded_idoso-homem.png')
            }
        } else if (formsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/rounded_bebe-mulher.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'imgs/rounded_jovem-mulher.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src','imgs/rounded_adulto-mulher.png')
            } else {
                img.setAttribute('src', 'imgs/rounded_idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}