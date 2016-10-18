$(document).ready(function()  {
  $(".clickable").click(function()  {
  $("#unicorn-hidden").slideDown();
  });

  $(".clickable2").click(function() {
  $("#info-showing").slideToggle();
  $("#clickable-text").removeClass();
  });

  $(".clickable3").click(function() {
  $("#unicorn-hidden").slideUp();
  $("#info-showing").slideUp();
  });

  $(".unhighlighted").click(function() {
    $(".unhighlighted").toggleClass("highlight");
  })

  $("button#red").click(function() {
    $("body").toggleClass("purple-background");
  });

});
