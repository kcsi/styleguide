/**
 * dialog関連の表示に関するjs
 *
 */
var dialog ={
  init: function(){
    dialog.show();
    dialog.hide();
  },
  show: function(){
    $('.dialog').css('display', 'block');
  },
  hide: function(){
    $('._close').on('click', function(){
      $('.dialog').css('display', 'none');
      return false
    });
  }
}

$(function(){
  var $dialog = $('.dialog');
  var $dialogContainer = $('._container');

  /**
   * サンプル
   *
   */
  $('#dialogSample').on('click', function(){
    $dialogContainer.html($('#dialogSample1').html());
    $('.styleguide-element').css('position', 'static');
    dialog.init();
  });
});