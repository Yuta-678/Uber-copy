$(function(){

$('.menu-bar').click(function(){
  if($('.menu-bar').hasClass('menu')){
    $('#menu').css('display','block');
    $('#main').css('display','none');
    $('#footer').css('display','none');
    $('.menu-bar').html('<img src="photos/batu.png">');
    $('.menu-bar').removeClass('menu');
  }else{
    $('#menu').css('display','none');
    $('#main').css('display','block');
    $('#footer').css('display','block');
    $('.menu-bar').html('<img src="photos/menu.png">');
    $('.menu-bar').addClass('menu');
  }
})

$('.menu-details').click(function(){
  if($('.menu-details').hasClass('hide')){
    $('.menu-detail').css('display','block');
    $('.allow').html('<img src="photos/up-allow.png">');
    $('.menu-details').removeClass('hide');
  }else{
    $('.menu-detail').css('display','none');
    $('.allow').html('<img src="photos/down-allow.png">');
    $('.menu-details').addClass('hide');
  }
});


});
