$(document).ready(function() {
  $("#title").click(function() {
    $("#triangle-down, #triangle-up").addClass("usenand");
    $('content').addClass('krassInefade');
    $("#triangle-up, #triangle-down").delay(1500).fadeOut();
    $("#title").fadeOut(500);
    $("#title").fadeOut(200);
  });
});


$("nav ul li[data-section='ABA1']").on("click", function()
{
  $("main").css("margin-left", "0");
});

$("nav ul li[data-section='ABA2']").on("click", function()
{
  $("main").css("margin-left", "-100%");
});

$("nav ul li[data-section='ABA3']").on("click", function()
{
  $("main").css("margin-left", "-200%");
});

$("nav ul li[data-section='ABA4']").on("click", function()
{
  $("main").css("margin-left", "-300%");
});

