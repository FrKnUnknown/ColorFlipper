const listaCores = ['green', '#FA76CD', '#777ABC', 'rgb(139,0,139)']

var button = document.getElementById('botao_cor')
var input = document.getElementById('input_cor')
var span = document.getElementById('texto_cor')

function numeroRandomico(){
    return Math.floor(Math.random() * listaCores.length)
}
function quandoClicar() {
    var cor
if(input.value) {
            // Tiver algo escrito
            cor = input.value
    } else {
        // Se não tiver algo escrito
        var rand = numeroRandomico()
        cor = listaCores[rand]
    }

     document.body.style.backgroundColor = cor
    span.textContent = cor
    
}

document.body.style.backgroundColor = 'grey'


button.addEventListener('click', quandoClicar)