$(function () {
    $('.toanchor').on('click', function (e) {
        $('html,body').stop().animate({scrollTop: $('#top').offset().top}, 1000);
        e.preventDefault();
    });

    $('.sideanchor').on('click', function (e){
        $('html,body').stop().animate({scrollTop: $('#top').offset().top}, 1000);
        e.preventDefault();
    });

    $(function(f){
        $('#sideanchorage').hide();
        var element = f('#sideanchorage');
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 1000 ? 'In': 'Out')](500);
        });
    });

});

window.onload = function Dimension() {
    var elmHeight, elmMargin;
    if (document.all) { // IE
        elmHeight = document.getElementById('main').currentStyle.height;
        elmMargin = parseInt(document.getElementById('main').currentStyle.marginTop, 10) + parseInt(document.getElementById('main').currentStyle.marginBottom, 10) + "px";
    }
    else { // Mozilla
        elmHeight = document.defaultView.getComputedStyle(document.getElementById('main'), '').getPropertyValue('height');
        elmMargin = parseInt(document.defaultView.getComputedStyle(document.getElementById('main'), '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(document.getElementById('main'), '').getPropertyValue('margin-bottom')) + "px";
    }
    document.getElementById('sideanchorage').style.height = elmHeight;

};




/*
$(function () {
   var o = $('#sideanchorage').offset().top;
    alert(o);
    if (o > 600) {
        $('.sideanchor').hide();
    }
    else {
        $('.sideanchor').show();
    }




});*/

  /*  var width = new Array(5);
    for (var i=0; i <5; i++)
    {
        width = ([$('.dropmenu').width()]);
        alert(width[i]);
    }

   var width = $('.dropmenu').map(function(){
        return $(this).width();
    }).get();

    width.splice(width.indexOf(width[0]),1);
    alert(width);


    $('.sdvig').forEach(width, function(){
        $('.sdvig').css('margin-left', -width);
    });*/


    /*
    var arr = $('.sdvig').map(function(){
        for (var i=0; i<4; i++){
        $(this).style.marginLeft =  (-width[i]);}
    }).get();
    alert(arr);*/

