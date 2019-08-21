

var leapYear = function(year){
  return false;
}

var leapYEar = function(year)

// jQuery user interface here.
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
  event.preventDefault();
  var year = parseInt($("input#year").val());
  var result = leapYear(year);
  $("#result").text(result);
  });
});
