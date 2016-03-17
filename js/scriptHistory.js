function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {

  var listCount = 2;
  var elem1 = {
      price: "123",
      date: "123123",
      children: 8,
      adult: 12,

  }
  var tickets1 = {
    price: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
    date: "Some text for article #1",

    children: 8,
    adult: 12,

  }
  function createTickets(tickInfo){
          var currentList='';
          currentList += '<div class="typeTick">'+tickInfo.children+'</div>';
          currentList += '<div class="tick">'+tickInfo.adult+'</div>';
          currentList += '<div class="numberTick">'+tickInfo.price+'</div>';
          currentList += '<div class="age">'+tickInfo.date+'</div>';
          $(".tickets").html(currentList);
  }

    $.getJSON('js/tickets.json', function(data) {
      alert(data.length);
      var currentList='';
      for(var i=0;i<data.length;i++){

        currentList='<div class="ticket" id="'+i+'"></div>';
		$(currentList).appendTo(".list").append(function(){var current='';  
		current='<div class="children">'+data[i]["childcount"]+'</div><div class="adult">'+data[i]["adultcount"]+'</div><div class="price">'
		+data[i]["price"]+'</div><div class="date">'+data[i]["date"]+'</div>'; 
		return current;});
      }
	  console.log(data[1]["price"]);
     
    });

/*

  $.getJSON('js/tickets.json', function(data) {
    var current='';
    for(var i=0;i<data.length;i++){
      console.log(data[i]["price"]);
      current='<div class="price">'+data[i]["price"]+'</div>';
      console.log(current);

    }
  });
  $("#1").html("Хуйня");
  $("#0").html("Хуйня");
  var tickets1 = {
      price: "123",
      date: "123123",
      children: 8,
      adult: 12,
  }
  var tickets2 = {
    price: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
    date: "Some text for article #1",
    children: 8,
    adult: 12,
  }*/
});
