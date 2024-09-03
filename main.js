$(document).ready(function () {
    $('#carrossel').slick({
        autoplay:true,
        fade:true,// faz um esmaecimento entre as fotos do carrossel
        arrows:false
    });

    $('.conteudo button').click(function (e) { 
        e.preventDefault();
        
        alert("Seu produto foi adicionado no carrinho de compras.")
    });
})