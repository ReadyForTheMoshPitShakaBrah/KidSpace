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
		current='<div class="children">'+data[i]["childcount"]+'</div><div class="adult">'+data[i]["adultcount"]+'</div><div class="price">'
		+data[i]["price"]+'</div><div class="date">'+data[i]["date"]+'</div>'; 
		return current;});
      }    
    });
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
	show($(target).closest(".ticket").attr('id'));
	$('.click').removeClass('click').addClass('ticket');
	$(target).closest('.ticket').removeClass('ticket').addClass('click');	
  });
});
