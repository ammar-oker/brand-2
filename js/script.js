
$(document).ready(function () {
    // fix carousel direction issues
    $("#home-carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).on("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;

            if( Math.floor(xClick - xMove) > 5 ){
                $(this).carousel('prev');
            }
            else if( Math.floor(xClick - xMove) < -5 ){
                $(this).carousel('next');
            }
        });
        $("#home-carousel").on("touchend", function(){
            $(this).off("touchmove");
        });
    });
});