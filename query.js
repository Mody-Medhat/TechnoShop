$(document).ready(function () {
    $("#hide ,#hide1, #hide2 ,#hide3,#hide4,#hide5").click(function () {
        $("#banner, #baner, #test1").hide();
    });
  
  });
  $(document).ready(function () {
    $("#showAll").click(function () {
        $("#banner, #baner, #test1").show();
    });
  
  });