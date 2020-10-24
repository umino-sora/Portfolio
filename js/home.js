// home
$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
});

$('.nav_menu_li').hover(function () {
    // カーソルが当たった時の処理
    $(this).css({"text-decoration":"underline"});
    }, function() {
    // カーソルが離れた時の処理
    $(this).css("text-decoration", "none");
})
