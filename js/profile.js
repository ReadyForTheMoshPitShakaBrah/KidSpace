function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
	        $('#photoload').hide();
			$("#fon").mask("+7"+" (999) 999-9999",{placeholder:" "});
	$.getJSON('js/profile.json', function(data){
		$('#fam').val(data.fam);
		$('#name').val(data.name);
		$('#middleName').val(data.middleName);
		$('#age').val(data.age);
		$('#fon').val(data.fon);
		$('#mail').val(data.mail);
		$('.image img').attr('src', data.photo);

		});			
	$('body').on('click','.image',function(event){				
			$('input[type=file]').click();		
			});
						
	function readURL(input) {
             if (input.files && input.files[0]) {
              var reader = new FileReader();
               reader.onload = function (e) {
               $('.image img').attr('src', e.target.result);
               } 
             reader.readAsDataURL(input.files[0]);
		}
		}
		
			$("#photoload").change(function(){			
			
			readURL(this);
	
			});
});
