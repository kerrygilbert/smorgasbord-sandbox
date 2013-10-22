$.fn.bord = function(userOptions) {
  var audios = this;
  var options = userOptions || {};

  audios.each(function(index){
    var that = $(this);
    var sound = $(this).get(0);

    if(!that.attr('id')) {
      var croppedSrc = that.attr('src').split('.')[0].split('/');
      croppedSrc = croppedSrc[croppedSrc.length-1];
      that.attr('id', croppedSrc);
    }

    var id = that.attr('id');

    that.removeAttr('controls');
    var control = '<div class="smorgas btn s-'+(index+1)+'" id="'+id+'">'+id+'</div>';
    $(control).appendTo(that.parent()).wrap('<div class="sound-container"></div>');
    var btn = $('.btn#'+id);

    if(options.loopable) {
      btn.parent().append('<input class="toggle-loop" type="checkbox" name="loop">');
      btn.parent().find('input').on('change', function(){
        btn.toggleClass('loops');
      });
    }

    btn.on('click', function(event){
      if($(this).hasClass('playing')) {
        stopSound($(this), sound);
      } else {
        playSound($(this), sound);
      }
    });

    sound.addEventListener('canplaythrough', function(){
      $('div#'+$(this).attr('id')).addClass('playable');
    });

    sound.addEventListener('ended', function(){
      $('div#'+$(this).attr('id')).removeClass('playing');
    });
  });

  function stopSound(btn, sound) {
    sound.pause();
    sound.currentTime = 0;
    btn.removeClass('playing');
  }

  function playSound(btn, sound) {
    $(sound).removeAttr('loop');
    if(btn.hasClass('loops')) {
      $(sound).attr('loop',true)
    }
    sound.play();
    btn.addClass('playing');
  }

  if(options.keyboard) {
    window.onkeydown = function(event){
      var key = event.which;
      if(key < 58 && key > 47) {
        $('.btn.s-'+(key-48)).trigger('click');
      } 
    }
  }
}

