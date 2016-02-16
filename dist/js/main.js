$(function(){

  var imgFadeIn = function() {
    var phoneImg = $('.phones');

    phoneImg.on('load', function(){
      $(this).addClass('fade-in');
    });
  }

  imgFadeIn();

});