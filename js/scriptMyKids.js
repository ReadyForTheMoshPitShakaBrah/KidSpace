function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
			var current='';
			var string='';
	$.getJSON('js/mykids.json', function(data){
		var current='';
		for(var i=0;i<data.length;i++){
			current='<div class="photo"><img src="'+data[i].photo+'"></div><div class="name">'+data[i].name+' '+data[i].fam+'</div><div class="age">'+data[i].age+'</div><div class="type">'+data[i].type+'</div><div class="exp">'+data[i].expa+'</div><div class="station">'+data[i].station+'</div><div class="history">История</div>';
		$('<div class="item"></div>').appendTo('.list').append(current);
		}
		string='<div class="flip-container" id="flip-toggle" ontouchstart="this.classList.toggle(\'default\');"><div class="flipper"><div class="front"><div onclick="document.querySelector(\'#flip-toggle\').classList.toggle(\'hover\');" class="add"><div><img src="imgs/add.png"></div>Добавить ребенка<div><img src="imgs/boys.png"></div></div></div><div class="back"><div  onclick="document.querySelector(\'#flip-toggle\').classList.toggle(\'hover\');" class="backButton">X</div></div></div></div>';
		$('<div class="item"></div>').appendTo('.list').append(string);
		current='<div><img src="imgs/photo.png"></div><div>Фамилия:<input  class="textbox" text id="fam"></div><div>Имя<input  class="textbox" text id="name"></div><div>Дата:<input  class="textbox"  text></div><div class="button">Добавить</div>';
		$('<div class="newitem"></div>').appendTo('.back').append(current);
		});
		var add='<div class"add"><img src="imgs/boys.png"></div>';
		var stringAdd;
		$(".front").append(add);
		$('body').on("click",'.button', function(event) {
			$('.front').empty();
		stringAdd='<div class="photo"><img src="'+'imgs/kids2.png'+'"></div><div class="name">'+$('#name').val()+' '+$('#fam').val()+'</div><div class="age">'+15+'</div><div class="type">'+'кидвайзер'+'</div><div class="exp">'+0+'</div><div class="station">'+'</div><div class="history">История</div>';
			$('.front').append(stringAdd);
			$('#flip-toggle').attr('class','flip-container');
			var target=event.target;
			setTimeout(function() {
			$(target).closest('.item').html(stringAdd);
						$('<div class="item"></div>').appendTo('.list').append(string);
		current='<div><img src="imgs/photo.png"></div><div>Фамилия:<input  class="textbox" text id="fam"></div><div>Имя<input class="textbox" text id="name"></div><div>Дата:<input  class="textbox" text></div><div class="button">Добавить</div>';
		$('<div class="newitem"></div>').appendTo('.back').append(current);
			 } ,500);

			});


});
