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
      $(sound).removeAttr('loop');
      if(btn.hasClass('loops')) {
        $(sound).attr('loop',true)
      }
      sound.play();
      btn.addClass('playing');
    }
  });

  $('input.toggle-loop').on('change', function(){
    $(this).parent().find('.btn').toggleClass('loops');
    $(this).parent().find('.btn').removeClass('playing')
    $(this).parent().find('audio').get(0).pause();
    $(this).parent().find('audio').get(0).currentTime = 0;
  });


  window.onkeypress = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if(key < 58 && key > 48) {
      $('.btn.s-'+(key-48)).trigger('click');
    }
  }


});