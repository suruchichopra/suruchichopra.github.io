/**
 * Created by SURANSH on 12/6/2016.
 */

var str = '<p class="animated slideInRight" style="text-align:justify;' + 'font-family:Segoe Print;font-weight:110;' + 'font-size:100%;' + 'font-size:15px"><br>My dearest readers,<br/><br/>';
str += 'As the Indian tradition firmly establishes its belief in ‘Atithi Devo Bhava’ (The Guest is equivalent to God), you all are not less than angels on this home of mine wherein I intend put my heart and soul out in welcoming you all with the garland of my words. Here on , we are related by the language of the heart for the words traverse straight from the heart to the tip of my pen. You all are a part of my most cherished dream and hence I extend my hand for a friendship with a lifetime guarantee!!!<br/><br/>'
str += 'So my dearest friends, <br/><br/>'
str += "I , me , myself  , Suruchi Chopra. I am 20 years old girl, born and brought up in Delhi, yet I am far away from that ‘college going dilliwali ladki image’ everyone has in their minds. In stark contrast to those chirpy , fashionable, pro Honey Singh , perfect figure, etc. girls who are dream of every boy on the campus, <br/><br/></p>";
var s = 'I am a an introvert(but a bit outspoken when I write),preferring traditional over the western, listening to the old Lata Mangeshkar classics and the evergreen Ghazals by Jagjit Singh. I will prefer sitting alone in my balcony and watching a sunset rather than roaming in those extra loud night clubs that is the adda for most people of my age. I am also into spirituality and often ponder over life, its purpose and many more unanswered questions that ring the bells in my mind!'
var string = '<p class="animated slideInUp" id = "text2" style="text-align:justify;color:silver;' + 'font-family:Segoe Print;font-weight:110;font-size:15px;">' + s + ' <br> <br> far as my education is concerned, I have done my schooling from Apeejay School Pitampura. Presently , I am pursuing Bcom Hons. from Shri Ram College Of Commerce , Delhi. I have also worked as a finance intern at Bharat Heavy Electricals Limited(BHEL India Ltd).Apart from writing , I am deeply inspired by music. I am a six year diploma holder in Classical music from Prayag University. I have also written blogs for Speaking Tree and my poems have found a place in the Reserve Bank Of India quarterly magazine. My writing is generally inspired by the happenings of my life and those of others around me. My keen observation of nature often puts my poet heart at place.<br/> <br/>I whole heartedly welcome you all again to the abode of my heart. I will love to hear from you all too!!!<br/><br/> Hugs and Love<br/><br/> Suruchi<br/></p>'


$(window).on('resize', function(){
    var win = $(this);
    if (win.width() <= 1024 && win.width() > 768) {
        $('#text1').html(str);
        $('#text2').html(string);
    }
    if (win.width() <= 768) {
        $('#photo').removeClass();
        $('#photo').addClass('pull-center');
    }
    else {
        $('#photo').removeClass();
        $('#photo').addClass('pull-left');
    }
});