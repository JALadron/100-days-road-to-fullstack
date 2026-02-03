
var casilla_negra = document.getElementsByClassName('colb');
var casilla_blanca = document.getElementsByClassName('colw');
document.getElementById('switchCheckDefault').addEventListener('change', function() {
    if (this.checked) {
        for (let i = 0; i < casilla_blanca.length; i++) {
            var elemento = casilla_blanca[i];
            elemento.style.backgroundColor = 'black';
            elemento.style.color = 'white';
            
        }
        for (let i = 0; i < casilla_negra.length; i++) {
            var elemento2 = casilla_negra[i];
            elemento2.style.backgroundColor = 'white';
            elemento2.style.color = 'black';
            
        }
    }else{
        for (let i = 0; i < casilla_blanca.length; i++) {
            var elemento = casilla_blanca[i];
            elemento.style.backgroundColor = 'white';
            elemento.style.color = 'black';
            
        }
        for (let i = 0; i < casilla_negra.length; i++) {
            var elemento2 = casilla_negra[i];
            elemento2.style.backgroundColor = 'black';
            elemento2.style.color = 'white';
        }
    }
});   