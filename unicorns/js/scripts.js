$(document).ready(function()  {
  $(".clickable").click(function()  {
  $("#unicorn-hidden").slideDown();
  });
  $(".clickable2").click(function() {
  $("#info-showing").slideToggle();
  });
  $(".clickable3").click(function() {
  $("#unicorn-hidden").slideUp();
  $("#info-showing").slideUp();
  });
});
