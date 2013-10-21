$(function(){
  $('.btn').on('click', function(event){
    $('audio[data-id="'+$(this).attr('id')+'"]').get(0).play();
  });
});