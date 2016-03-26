function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
	        $('#photoload').hide();
			var current='';
			var string='';
			var i=0;
			var currentAdd='';
			var stringEdit='';
			var imageid;
			function getAge(date){
			var date= new Date(date);
			var nowDate=new Date();
			var year;
			if(date.getMonth()<nowDate.getMonth()){year=nowDate.getFullYear()-date.getFullYear();}
			if(date.getMonth()==nowDate.getMonth() && date.getDay()<nowDate.getDate()){year=nowDate.getFullYear()-date.getFullYear();}
			if(date.getMonth()==nowDate.getMonth() && date.getDay()>nowDate.getDate()){year=nowDate.getFullYear()-date.getFullYear()-1;}
			if(date.getMonth()>nowDate.getMonth()){year=nowDate.getFullYear()-date.getFullYear()-1;}

			return year;}
	$.getJSON('js/mykids.json', function(data){
		var current='';

		
		for( i=0;i<data.length;i++){
			var age = getAge(data[i].age);
			current='<div class="flip-container" id="flip-toggle" ontouchstart="this.classList.toggle(\'default\');"><div class="flipper"><div class="front"><div  class="edit"><div class="photo"><img src="'+data[i].photo+'"></div><div class="name">'+data[i].name+' '+data[i].fam+'</div><div class="age"><i class="fa fa-child"></i><i class="fa fa-child fa-lg"></i>'+age+' лет</div><div class="type"><i class="fa fa-star-half-o"></i>'+data[i].type+'</div><div class="exp"><i class="fa fa-money"></i> '+data[i].expa+'</div><div class="station"><i class="fa fa-compass"></i> '+data[i].station+'</div><div class="history"><a href="kidhistory.html#'+i+'" class="link">История</a></div><div class="editBut">Редактирование</div></div></div><div class="back"><div class="backButton">X</div></div>';
		$('<div class="item" id="'+i+'"></div>').appendTo('.list').append(current);
		stringEdit='<div class="image"><img src="'+data[i].photo+'"></div><div>Фамилия:<input  class="textbox" text id="fam" value="'+data[i].fam+'"></div><div>Имя<input  class="textbox" text id="name" value="'+data[i].name+'"></div><div>Дата:<input  class="textbox"  text id="age" value="'+data[i].age+'"></div><div class="saveButton">Редактировать</div>';
		$('<div class="edititem"></div>').appendTo('#'+i+' .back').append(stringEdit);
		}
		string='<div class="flip-container" id="flip-toggle" ><div class="flipper"><div class="front"><div class="add"><div><img src="imgs/add.png"></div>Добавить ребенка<div><img src="imgs/boys.png"></div></div></div><div class="back"><div class="backButton">X</div></div></div></div>';
		$('<div class="item" id="'+i+'"></div>').appendTo('.list').append(string);
		currentAdd='<div class="image"><img src="imgs/photo.png"></div><div>Фамилия:<input  class="textbox" text id="fam"></div><div>Имя<input  class="textbox" text id="name"></div><div>Дата:<input  class="textbox"  text id="age"></div><div class="button">Добавить</div>';
		$('<div class="newitem"></div>').appendTo('#'+i+' .back').append(currentAdd);
		});
		var add='<div class"add"><img src="imgs/boys.png"></div>';
		var stringAdd;
		$(".front").append(add);
		$('body').on("click",'.button', function(event) {
			var target=event.target;
			var id=$(target).closest('.item').attr('id');
			var age = getAge($('#'+id+' #age').val());
			
			$('#'+id+' .front').empty();
			

			i++;
		stringAdd='<div  class="edit"><div class="photo"><img src="'+'imgs/photo.png'+'"></div><div class="name">'+$('#'+id+' #name').val()+' '+$('#'+id+' #fam').val()+'</div><div class="age"><i class="fa fa-child"></i><i class="fa fa-child fa-lg"></i>'+age+'</div><div class="type"><i class="fa fa-star-half-o"></i>'+'кидвайзер'+'</div><div class="exp"><i class="fa fa-money"></i> '+0+'</div><div class="station">'+'</div><div class="history"><a href="kidhistory.html#'+i+'" class="link">История</a></div></div>';
		     
			$('#'+id+' .front').html(stringAdd);
			$('#'+id+' .photo img').attr('src',$('#'+imageid+' .image img').attr('src'))
			$(target).closest('#flip-toggle').toggleClass('hover');

			setTimeout(function() {
			$('<div class="item" id="'+i+'"></div>').appendTo('.list').append(string);

		$('<div class="newitem"></div>').appendTo('#'+i+' .back').append(currentAdd);
			 } ,500);

			});
			$('body').on("click",'.editBut', function(event) {
				var target=event.target;
				$(target).closest('#flip-toggle').toggleClass('hover');
				
			});
			$('body').on("click",'.add', function(event) {
				var target=event.target;
				$(target).closest('#flip-toggle').toggleClass('hover');
				
			});
			$('body').on("click",'.backButton', function(event) {
				var target=event.target;
				$(target).closest('#flip-toggle').toggleClass('hover');
				
			});
			$('body').on("click",'.saveButton', function(event) {
			var target=event.target;
			var id=$(target).closest('.item').attr('id');
			$('#'+id+' .name').text($('#'+id+' #name').val()+' '+$('#'+id+' #fam').val());
			var age=getAge($('#'+id+' #age').val());
			$('#'+id+' .age').html('<i class="fa fa-child"></i><i class="fa fa-child fa-lg"></i>'+age+' лет');
			$(target).closest('#flip-toggle').toggleClass('hover');
			$('#'+id+' .photo img').attr('src',$('#'+id+' .image img').attr('src'));
			});
			
			$('body').on('click','.image',function(event){
				imageid=$(this).closest('.item').attr('id');
				
			$('input[type=file]').click();		
			});
						
			function readURL(input) {
             if (input.files && input.files[0]) {
              var reader = new FileReader();
               reader.onload = function (e) {
               $('#'+imageid+' .image img').attr('src', e.target.result);
               } 
             reader.readAsDataURL(input.files[0]);
		}
		}
		
			$("#photoload").change(function(){			
			
			readURL(this);
			//var id=$(target).closest('.item').attr('id');
			//$('#'+id+' .photo img').attr('src',$('#photoload').val());	
			});
});
