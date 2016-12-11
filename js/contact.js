/**
 * Created by SURANSH on 12/8/2016.
 */

$(window).on('resize', function(){
    var win = $(this);
    if (win.width() <= 520) {
        $('#photo').removeClass();
        $('#photo').addClass('pull-center');
    }
    else {
        $('#photo').removeClass();
        $('#photo').addClass('pull-right');
    }
});