$(document).ready(function() {
   var bubblecount = 9;
   if (bubblecount != 0) {
      var somestring = '<div id="rednote">';
      somestring += bubblecount + '</div>';
      $("#bubble").html(somestring);
   }
});
