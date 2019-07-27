$(document).ready(function(){
    $('.linkme').click(function(){
        $(".list-inline").removeClass("invisible")
        $(".list-inline li").animate({opacity: '1'}, 900);
    });

    $(function(){
        $('.circlechart').circlechart();
    });

    $(".nav-link").click(function(){
        event.preventDefault();
        var elem = $(this).attr("href");
        if ($(elem).length != 0){
            $("body,html").animate({scrollTop: $(elem).offset().top}, 700)
        }
    });


    $(".eachElems").mouseover(function(){
        $(this).css({
            '-webkit-transform' : 'scale(1.2)',
            '-ms-transform' : 'scale(1.2)',
            '-o-transform' : 'scale(1.2)',
            'transform' : 'scale(1.2)'
        })
        $(".eachElems").not(this).css({
            '-webkit-transform' : 'scale(0.8)',
            '-ms-transform' : 'scale(0.8)',
            '-o-transform' : 'scale(0.8)',
            'transform' : 'scale(0.8)'
        })
    });

    $(".eachElems").mouseout(function(){
        $(this).css({
            '-webkit-transform' : 'scale(1)',
            '-ms-transform' : 'scale(1)',
            '-o-transform' : 'scale(1)',
            'transform' : 'scale(1)'
        });
         $(".eachElems").not(this).css({
            '-webkit-transform' : 'scale(1)',
            '-ms-transform' : 'scale(1)',
            '-o-transform' : 'scale(1)',
            'transform' : 'scale(1)'
        })
    });

    window.ondragstart = function() { return false; }
});