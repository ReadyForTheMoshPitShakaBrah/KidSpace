function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
			var current='';
			var string='';
			var i=0;
	$.getJSON('js/mykids.json', function(data){
		var current='';
		
		for( i=0;i<data.length;i++){
			current='<div class="photo"><img src="'+data[i].photo+'"></div><div class="name">'+data[i].name+' '+data[i].fam+'</div><div class="age"><i class="fa fa-child"></i><i class="fa fa-child fa-lg"></i>'+data[i].age+' лет</div><div class="type"><i class="fa fa-star-half-o"></i>'+data[i].type+'</div><div class="exp"><i class="fa fa-money"></i> '+data[i].expa+'</div><div class="station"><i class="fa fa-compass"></i> '+data[i].station+'</div><div class="history"><a href="kidhistory.html#'+i+'" class="link">История</a></div>';
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
			i++;
		stringAdd='<div class="photo"><img src="'+'imgs/kids2.png'+'"></div><div class="name">'+$('#name').val()+' '+$('#fam').val()+'</div><div class="age"><i class="fa fa-child"></i><i class="fa fa-child fa-lg"></i>'+15+'</div><div class="type"><i class="fa fa-star-half-o"></i>'+'кидвайзер'+'</div><div class="exp"><i class="fa fa-money"></i> '+0+'</div><div class="station">'+'</div><div class="history"><a href="kidhistory.html#'+i+'" class="link">История</a></div>';
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
