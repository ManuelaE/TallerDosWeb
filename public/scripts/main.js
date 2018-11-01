var mascot = document.querySelector('.mascota').getAttribute('data-mascota');
window.addEventListener('load', function(){

    var perro = document.querySelector(".mascota__perro");
    var gato = document.querySelector(".mascota__gato");

    var azul = document.querySelector(".mascota__azul");
    var amarillo = document.querySelector(".mascota__amarillo");
    var verde = document.querySelector(".mascota__verde");
    var roja = document.querySelector(".mascota__rojo");
    var otr = document.querySelector(".mascota__otro");

    azul.addEventListener('click', function(){
        window.location.href = `/tiendafiltro3/?color=${azul.innerHTML.toString()}&mascota=${mascot}`;
    });
    amarillo.addEventListener('click', function(){
        window.location.href = `/tiendafiltro3/?color=${amarillo.innerHTML.toString()}&mascota=${mascot}`;
    });
    verde.addEventListener('click', function(){
        window.location.href = `/tiendafiltro3/?color=${verde.innerHTML.toString()}&mascota=${mascot}`;
    });
    roja.addEventListener('click', function(){
        window.location.href = `/tiendafiltro3/?color=${roja.innerHTML.toString()}&mascota=${mascot}`;
    });
    otr.addEventListener('click', function(){
        window.location.href = `/tiendafiltro3/?color=${otr.innerHTML.toString()}&mascota=${mascot}`;
    });
//LINKS
    //Ir al carrito de compra
    // document.querySelector(".carro").addEventListener('click', function(){

    //     window.location.href = "/comprar";
    // });
    
    //Filtro principal por mascota
    perro.addEventListener('click', function(){
        window.location.href = "/tienda/?mascota=perro";
    });
    
    gato.addEventListener('click', function(){
        window.location.href = "/tienda/?mascota=gato";
    });

    var accesorio = document.querySelectorAll('.accesorio__elegido');
    accesorio.forEach(function (elem) {
        elem.addEventListener('click', function () {
            //console.log(mascot);
            window.location.href = `/tiendafiltro2/?tipo=${elem.getAttribute('data-titulo')}&mascota=${mascot}`;
        });
    });

    var color = document.querySelectorAll('.color__elegido');
    color.forEach(function (elem) {
        elem.addEventListener('click', function () {
            window.location.href = `/tiendafiltro3/?tipo=${elem.getAttribute('data-titulo')}`;
        });
    });

    var ver = document.querySelectorAll('.img__ver');
    ver.forEach(function (elem) {
        elem.addEventListener('click', function () {
            window.location.href = `/descrip/?who=${elem.getAttribute('data-titulo')}`;
        });
    });
    //linea
    
});