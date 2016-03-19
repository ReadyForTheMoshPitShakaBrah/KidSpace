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
  }
  function show(id){ //  выводит в правый блок инфу о билетах 
	  $.getJSON('js/tickets.json', function(data){
		  var empty='';
		  $('.adultTickets').html('');
		  $('.childTickets').html('');
	  for(var i=0; i<data[id].tickets.length;i++){
		  if(data[id].tickets[i].type==="adult"){
		  empty='<div class="info"><p>смейный билет</p><p>взрослый 15+ лет</p>#'+data[id].tickets[i].ticketid+'</div>';
	      $('.adultTickets').append(empty);
		  }
		  else{
		  empty='<div class="info"><p>смейный билет</p><p>ждетский 7 лет</p>#'+data[id].tickets[i].ticketid+'</div>';
	      $('.childTickets').append(empty);}
	  }
	  });
  }
  show(0); //при загрузке страницы выбирается первый элемент
  $(".list").on('click',function(event){
    var target = event.target;
    if (target.tagName != 'DIV') {
    target = target.parentNode;
    }
    alert($(target).closest(".ticket").attr('id')); ////// eto id elementa po kotoromy click
	show($(target).closest(".ticket").attr('id'));
	$('.click').removeClass('click').addClass('ticket');
	$(target).removeClass('ticket').addClass('click');

	
  });
});
