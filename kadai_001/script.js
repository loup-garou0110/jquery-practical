$(function () {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    fade: true,
    speed: 3000,
  });

  // ホームリンクがマウスホバー時に不透明アニメーション
  $('.home').on('mouseover', function () {
    $(this).animate({
      opacity:0.5,
    });
  });
  // ホームリンクがマウスオーバー時戻るアニメーション
  $('.home').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    });
  });
  // Aboutリンクがホバー時に不透明になるアニメーション
  $('.about-button').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    });
  });
  // Aboutリンクがマウスオーバー時戻るアニメーション
  $('.about-button').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    });
  });
  // Worksリンクがマウスホバー時に不透明になるアニメーション
  $('.works-button').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    });
  });
  // Worksリンクがマウスオーバー時に戻るアニメーション
  $('.works-button').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    });
  });

  // TOPボタンを押したらスムーズに画面上部へ戻る
  $('#back-btn').on('click', function () {
    $('body, html').animate({
      scrollTop:0,
    }, 2500)
    return false;
  });

  // モーダル
  $('.works img').on('click', function () {
    const imgSrc = $(this).attr('src');
    $('.modal-photo').attr('src', imgSrc);
    $('#modal').fadeIn();
    return false;
  });

  // 閉じるボタン
  $('.close-button').on('click', function () {
    $('#modal').fadeOut();
    return false;
  });
});

//ある程度画面をスクロールしたらTOPボタンが表示される
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 100) {
    $('#back-btn').fadeIn();
  } else {
    $('#back-btn').fadeOut();
  }
});

// セクションの位置までスクロールした時フェードインさせる
$(window).on('scroll', function () {
  $('.fadein').each(function () {
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scroll > position - windowHeight) {
      $(this).addClass('active');
    }
  });
});

