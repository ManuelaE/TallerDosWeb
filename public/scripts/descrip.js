window.addEventListener('load', function(){

    var colores = document.querySelectorAll('.des__color');

    colores.forEach(function (elem){
        switch(elem.getAttribute('data-color')){
            case 'azul':
                elem.style.backgroundColor = 'blue';
            break;

            case 'amarillo':
                elem.style.backgroundColor = 'yellow';
            break;

            case 'verde':
                elem.style.backgroundColor = 'green';
            break;

            case 'rojo':
                elem.style.backgroundColor = 'red';
            break;

            case 'otros':
                elem.style.backgroundColor = 'orange';
            break;
        }
    });
});