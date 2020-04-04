var $i = 1;
var $n = 2;
var $s = $('span').length;

window.setInterval(function(){
  $i ++;
  $n ++;
  if($i > $s){
    $i = 1;
  }
  if($n > $s){
    $n = 1;
  }
  $('.active').removeClass('active');
  $('span:nth-child(' + $i + ')').addClass('active');
  $('.next').removeClass('next');
  $('span:nth-child(' + $n + ')').addClass('next');
}, 2000);