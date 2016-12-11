/**
 * Created by SURANSH on 12/8/2016.
 */

$(window).on('resize', function(){
    var win = $(this);
    if (win.width() <= 600) {
        $('#momdad').removeClass();
        $('#momdad').addClass('pull-center');
        $('#mam').removeClass();
        $('#mam').addClass('pull-center');
        $('#shivali').removeClass();
        $('#shivali').addClass('pull-center');
        $('#suransh').removeClass();
        $('#suransh').addClass('pull-center');
    }
    else {
        $('#momdad').removeClass();
        $('#momdad').addClass('pull-left');
        $('#mam').removeClass();
        $('#mam').addClass('pull-right');
        $('#shivali').removeClass();
        $('#shivali').addClass('pull-left');
        $('#suransh').removeClass();
        $('#suransh').addClass('pull-right');
    }
});