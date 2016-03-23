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
		var i=document.location.href.charAt(document.location.href.length - 1);
		if(typeof i !="number"){i=0;}

				current='<div class="photo"><img src="'+data[i].photo+'"></div><div class="name">'+data[i].name+' '+data[i].fam+'</div><div class="age"><i class="fa fa-child"></i><i class="fa fa-child fa-lg"></i>'+data[i].age+' лет</div><div class="type"><i class="fa fa-star-half-o"></i>'+data[i].type+'</div><div class="exp"><i class="fa fa-money"></i> '+data[i].expa+'</div><div class="station"><i class="fa fa-compass"></i> '+data[i].station+'</div>';
		$('<div class="item"></div>').appendTo('.kid').append(current);
		for(var k=0;k<data[i].list.length;k++){
			stringList='<div class="block"><div class="icon"><img src="'+data[i].list[k].icon+'"><div class="time">'+data[i].list[k].time+'</div></div><div class="result">'+data[i].list[k].result+'</div><div class="action">чувак прибыл на станцию '+data[i].list[k].action+'</div></div>'
		$('.history').append(stringList);
		}
		});



});
