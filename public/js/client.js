$(function(){
  $('.btn').each(function(){
    var btn = $(this);
    var sound = $('audio[data-id="'+btn.attr('id')+'"]').get(0);
    sound.addEventListener('ended', function(){
      btn.removeClass('playing');
    });
  });

  $('audio').each(function(){
    var sound = $(this).get(0);
    sound.addEventListener('canplaythrough', function(){
      $('div#'+$(this).attr('data-id')).addClass('playable');
    });
  })

  $('.btn').on('click', function(event){
    var btn = $(this);
    var sound = $('audio[data-id="'+btn.attr('id')+'"]').get(0);

    if(btn.hasClass('playing')) {
      sound.pause();
      sound.currentTime = 0;
      btn.removeClass('playing')
    } else {
      sound.play();
      btn.addClass('playing');
    }
  });
});