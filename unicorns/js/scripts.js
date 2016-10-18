$(document).ready(function()  {
  $(".clickable").click(function()  {
  $("#unicorn-hidden").show();
  });
  $(".clickable2").click(function() {
  $("#info-showing").toggle();
  });
  $(".clickable3").click(function() {
  $("#unicorn-hidden").toggle();
  $("#info-showing").toggle();
  });
});
