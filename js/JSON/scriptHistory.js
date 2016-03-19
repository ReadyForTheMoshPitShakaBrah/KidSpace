function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
    $.getJSON('js/tickets.json', function(data) {
      var currentList='';
      for(var i=0;i<data.length;i++){
        currentList='<div class="ticket" id="'+i+'"></div>';
		$(currentList).appendTo(".list").append(function(){var current='';
		current='<div class="children"><span class="fa fa-child fa-x"></span><span class="InnerText"><p>'+data[i]["childcount"] + '</p></span>' +
    '</div><div class="adult"><span class="fa fa-male fa-lg"></span><span class="InnerText"><p>' + data[i]["adultcount"] + '</p></span>' +
    '</div><div class="price">' + data[i]["price"] + '</div><div class="date">' + data[i]["date"] + '</div>';
		return current;});
      }
    });
  function show(id){ //  выводит в правый блок инфу о билетах
	  $.getJSON('js/tickets.json', function(data){
		  var empty='';
		  $('.adultTickets').html('');
		  $('.childTickets').html('');
		  $('#'+id).removeClass('ticket').addClass('click');

	  for(var i=0; i<data[id].tickets.length;i++){
		  if(data[id].tickets[i].type=="adult"){
		  empty='<div class="info"><p>Семейный билет</p><p>Взрослый 15+ лет</p>#'+data[id].tickets[i].ticketid+'</div>';
	      $('.adultTickets').append(empty);
		  }
		  else{
		  empty='<div class="info"><p>Семейный билет</p><p>Детский 7 лет</p>#'+data[id].tickets[i].ticketid+'</div>';
	      $('.childTickets').append(empty);}
	  }
	  });
  }
  show(0); //при загрузке страницы выбирается первый элемент
  $(".list").on('click',function(event){
    var target = event.target;

	if($(target).attr('class')=='ticket')show($(target).closest(".ticket").attr('id'));
	$('.click').removeClass('click').addClass('ticket');
	$(target).closest('.ticket').removeClass('ticket').addClass('click');
  });
});
