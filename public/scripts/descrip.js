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
        };

        //Agregar al carrito
        var añadir = document.querySelector(".descrip__des__botones__b1");

        añadir.addEventListener('click', function(){
            añadirtucarrito(añadir.getAttribute('data-titulo'));
        });

        //Comprar
        var comprar = document.querySelector(".descrip__des__botones__b2");

        comprar.addEventListener('click', function(){
            añadirtucarrito(comprar.getAttribute('data-titulo'));
            window.location.href = `/comprar`;
        });

        function añadirtucarrito(atributo) {
                    
                    fetch(`/api/carritodecompra`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `titulo=${atributo}`,
                }).then(function(respuesta){
                    return respuesta.text();
                }).catch(function(error){
                    console.error(error);
                }).then(function(mensaje){
                    console.log(mensaje);
            });
        }
});