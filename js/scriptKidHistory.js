function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
		$.getJSON('js/mykids.json', function(data){
		var current='';
		var stringList='';
		var i=Number(document.location.href.charAt(document.location.href.length - 1));

		if(isNaN(i)){i=0;}

				current='<div class="photo"><img src="'+data[i].photo+'"></div><div class="name">'+data[i].name+' '+data[i].fam+'</div><div class="age">'+data[i].age+' лет</div><div class="type">'+data[i].type+'</div><div class="exp">'+data[i].expa+'</div><div class="station">'+data[i].station+'</div>';
		$('<div class="item"></div>').appendTo('.kid').append(current);
		var result='';
		for(var k=0;k<data[i].list.length;k++){
			if(data[i].list[k].result<0){result='Потрачено: <div class="red">'+data[i].list[k].result+' опыта</div>';}else{result='Заработано: <div class="blue">'+data[i].list[k].result+' опыта</div>';}
			stringList='<div class="block"><div class="icon"><img src="'+data[i].list[k].icon+'"><div class="time">'+data[i].list[k].time+'</div></div><div class="action">чувак прибыл на станцию <h5>'+data[i].list[k].action+'</h5></div><div class="result">'+result+'</div></div>';
		$('.history').append(stringList);
		}
		});



});
