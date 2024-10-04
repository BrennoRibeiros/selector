function verificador() {
    var genero = document.getElementsByName('txtsex')
    var patrimonio = document.getElementsByName('txtnum')
    var img = document.getElementById('foto')
    
    if (genero[0].checked) {
        document.body.style.background = '#add8e6'
        if (patrimonio[0].checked) {
            img.src = 'img/photo-man.jpg'
        } else if (patrimonio[1].checked) {
            img.src = 'img/photo-m-man.jpg'
        } else if (patrimonio[2].checked) {
            img.src = 'img/photo-man-rich.jpg'
        }
    }
    
    if (genero[1].checked) {
        document.body.style.background = '#ffcbdb'
        if (patrimonio[0].checked) {
            img.src = 'img/photo-woman.jpg'
        } else if (patrimonio[1].checked) {
            img.src = 'img/photo-m-woman.jpg'
        } else if (patrimonio[2].checked) {
            img.src = 'img/photo-woman-rich.jpg'
        }
    }
}