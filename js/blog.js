$(window).load(function() {
  $("section img").click(function() {
    $(".bg-wrapper").fadeOut();
    $(".lightbox").fadeIn();
    $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
    $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
    $(".title").append("<span>" + $(this).attr("alt") + "</span>");
    $("html").css("overflow", "hidden");
    if ($(this).is(":last-child")) {
      $(".arrowr").css("display", "none");
      $(".arrowl").css("display", "block");
    } else if ($(this).is(":first-child")) {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "none");
    } else {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "block");
    }
  });

  $(".close").click(function() {
    $(".lightbox").fadeOut();
    $(".bg-wrapper").fadeIn();
    $("span").remove();
    $(".lightbox img").remove();
    $("html").css("overflow", "auto");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(".lightbox").fadeOut(300);
      $(".lightbox img").remove();
      $("html").css("overflow", "auto");
    }
  });

  $(".arrowr").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var newImage = search.next().attr("src");
    var newTitle = search.next().attr("alt");
    /*$(".lightbox img").attr("src", search.next());*/
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");
    $("span").remove();
    $(".title").append("<span>" + newTitle + "</span>");

    if (!search.next().is(":last-child")) {
      $(".arrowl").css("display", "block");
    } else {
      $(".arrowr").css("display", "none");
    }
  });

  $(".arrowl").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var newTitle = search.prev().attr("alt");
    var newImage = search.prev().attr("src");
    /*$(".lightbox img").attr("src", search.next());*/
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");
    $("span").remove();
    $(".title").append("<span>" + newTitle + "</span>");

    if (!search.prev().is(":first-child")) {
      $(".arrowr").css("display", "block");
    } else {
      $(".arrowl").css("display", "none");
    }
  });
});