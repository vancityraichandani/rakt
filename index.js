$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 20) {
$('#toTopBtn').fadeIn();
} else {
$('#toTopBtn').fadeOut();
}
});

$('#toTopBtn').click(function() {
$("html, body").animate({
scrollTop: 0
}, 1000);
return false;
});
});







$(".btnjq").click(function(){

  var currDate = new Date();
  // currDate = currDate.value;
  var aqdate = document.getElementById("ad").value;
  aqdate = new Date(aqdate);


  var units= parseInt(document.getElementById("an").value / 5);
  var Difference_In_Time = currDate.getTime() - aqdate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  if(Difference_In_Days < 35){
    alert("It's been " + parseInt(Difference_In_Days) + " days storing the blood in blood bank.");
  }else if(Difference_In_Days <= 42){
    alert(" It has been " + parseInt(Difference_In_Days) + " days of storage. Blood bank can unconditionally donate " + units + " units of blood");
  }else{
    alert("Shelf life expired!")
  }

});

$(".portallink").click(function(){
  alert("You need to sign-in first!")
});

$(".logo").hover(function(){
  $(this).css("color", "#8f4068");
  }, function(){
  $(this).css("color", "pink");
});
$(".blaidlogo").hover(function(){
  $(this).css("color", "#8f4068");
  }, function(){
  $(this).css("color", "pink");
});

$(".btn-success").click(function(){
  alert("Request has been made successfully. Press ENTER or Click OK to generate reciept.");
});
