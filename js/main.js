$(document).ready(function () {

  //не активная кнопка при пустых полях в попапе
  $('#modal-sign-in').prop('disabled', true);
  $('input[type="text"]').keyup(function () {
    if ($('#modal-login').val() != '' && $('#modal-login').val() != '') {
      $('#modal-sign-in').prop('disabled', false);
    } else {
      $('#modal-sign-in').prop('disabled', true);
    }
  })

  //добавления акк при обратботке события кнопки войти в попапе
  $('#modal-sign-in').on('click', function () {
    localStorage.setItem('login', $('#modal-login').val());
    localStorage.setItem('password', $('#modal-password').val());
    console.log(localStorage.getItem('login'));
    console.log(localStorage.getItem('password'));
    $('.head-sign-in').hide();
    $('.head-sign-out').show();
    $('.head-name').attr('placeholder', localStorage.getItem('login'));
  })

  //вытаскивания имени или логина
  if (localStorage.getItem('name')) {
    $('.head-sign-in').hide();
    $('.head-sign-out').show();
    $('.head-name').attr('placeholder', localStorage.getItem('name'));
  } else if (localStorage.getItem('login')) {
    $('.head-sign-in').hide();
    $('.head-sign-out').show();
    $('.head-name').attr('placeholder', localStorage.getItem('login'));
  }

  //изменение имени и сохранения
  $('.head-name').keyup(function () {
    localStorage.setItem('name', $('.head-name').val());
    $('.head-name').attr('placeholder', localStorage.getItem('name'));
  })

  //выход из акк и удаления из localStorage
  $('#btn-logout').on('click', function () {
    localStorage.clear();
    $('.head-sign-in').show();
    $('.head-sign-out').hide();
  })


  $('.new-card_item').hover(function () {
    $(this).find('.new-card_item-img img').animate({ opacity: "0.2" }, "fast");
    $(this).find('.new-card_item-img-text').animate({ opacity: "1" }, "fast");
  }, function () {
    $(this).find('.new-card_item-img img').animate({ opacity: "1" }, "fast");
    $(this).find('.new-card_item-img-text').animate({ opacity: "0" }, "fast");
  });
  
});