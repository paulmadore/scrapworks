  <script> $('h1').each(function(){
var size;
var desired_width = ('1000px');
var resizer = $("#header");

resizer.html("");

while(resizer.width() > desired_width) {
  size = parseInt(resizer.css("font-size"), '6em');
  resizer.css("font-size", size - 1);
}
while(resizer.width() < desired_width) {
  size = parseInt(resizer.css("font-size"), '4.5em');
  resizer.css("font-size", size - 1);
}

$("#header").css("font-size", size).html(resizer.html());
   </script>