$(function () {

  //спойлер на faq 
  $('.faq__question').on('click', function () {
    if ($('.faq__list').hasClass('one')) {
      $('.faq__question').not($(this)).removeClass('active');
      $('.faq__answer').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })

  //услуги
  $('.services__item').on('click', function () {
    $('.services__hover').toggleClass('active');
  })

  //плавный скролл
  
})