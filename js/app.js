let index = 0;

$(function () {
  $("ul li").each(function () {
    $(this).click(navLinkClicked);
  });

  function navLinkClicked() {
    $("ul li").each(function () {
      $(this).removeClass("active");
    });

    $(this).addClass("active");

    if ($(this).text() == "Design") {
      index = 0;
    } else if ($(this).text() == "Animation") {
      index = 100;
    } else {
      index = 200;
    }

    $(".content div").css({
      transform: `translateY(-${index}%)`,
    });
  }
});
