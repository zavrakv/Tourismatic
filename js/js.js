$(function() {

    $('.welcome').on('click', function(){
        $(this).hide();
        document.getElementById('choose').style.display = 'flex';
        document.getElementById('choose').style.justifyContent = 'center';
    });

    $('[data-country]').on('click', function(){
        var imagepath = $(this).data('bg-image');
        document.body.style.backgroundImage = "url("+ imagepath + ")";
        var color = $(this).data('color');
        document.getElementById('mainm').style.color = color;
        $('#mainm a.dropli').css('color', color);
        $('#menubutton').css('color',color);
    });



});


