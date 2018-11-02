window.addEventListener('load', function(){

    var colores = document.querySelector('.descrip__des__color__cubo');
    console.log(colores);
    //colores.style.backgroundColor = 'blue';

        switch(colores.getAttribute('data-color')){
            case 'azul':
            colores.style.backgroundColor = 'blue';
                console.log('tt');
            break;

            case 'amarillo':
            colores.style.backgroundColor = 'yellow';
            break;

            case 'verde':
            colores.style.backgroundColor = 'green';
            break;

            case 'rojo':
            colores.style.backgroundColor = 'red';
            break;

            case 'otros':
            colores.style.backgroundColor = 'orange';
            break;
        }
});