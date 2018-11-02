window.addEventListener('load', function(){

    var total = 0;
    var precios = document.querySelectorAll('.compra__carro__prop__fn__precio');

    precios.forEach(function (elem){
        var x = parseInt(elem.innerHTML);
        total += x;
    });

    document.querySelector('.compra__carro__tot__res').innerHTML = total;
});