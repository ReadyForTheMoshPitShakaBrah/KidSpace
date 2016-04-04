var frames = new Array();
var current = 0;
	jQuery(document).ready(function(){
      if(jQuery('.frame').length!=1){
      jQuery('.slideframe').slidesjs({
			height:480,
			width:1200,
			pagination: {
			  active: true,
			  effect: "fade"	
			},
			play: {
			  active: false,
			  effect: "fade",
			  interval: 5000,
			  auto: true,
			  swap: true,
			  pauseOnHover: true,
			  restartDelay: 2500
			}
		});
    }
	jQuery('.topnav_menubutton').click(function(){
		if(jQuery(this).hasClass('showed')){
			jQuery('.topnav_menuul').css('right',-310);			
		}else{
			jQuery('.topnav_menuul').css('right',0);				
		}
		jQuery(this).toggleClass('showed');
	});
	var helperIndex = 1;
	jQuery('#playsvg .important').hover(function(){
		jQuery('#helper-'+helperIndex).removeClass('show');
		helperIndex =jQuery(this).attr('data'); 
		jQuery('#helper-'+helperIndex).addClass('show');
	});
	resizeVideo();
	jQuery( window ).resize(function(){
		resizeVideo();
	});
	jQuery(document).scroll(function(){
		scroll = jQuery(document).scrollTop(); 
		Scroll(scroll);
	});
	jQuery('.lgots a').click(function(){
		jQuery('.theframe').animate({'left':'-980px'});
		return false;
	});
	jQuery('.back-to-price').click(function(){
		jQuery('.theframe').animate({'left':'0px'});
	});
	
	jQuery('.topnav_menumain li a').click(function(){
		hush = jQuery(this).attr('href');
		/*jQuery('.color').removeClass('color');
		jQuery(this).addClass('color');*/
		jQuery('body').scrollTo(hush,300, {offset: {top:-60}});
		return false;
	});
	frames = jQuery('#game,.age,.what,#fr5,#fr6,#fr7,#fr9'); 
	jQuery('.method li').click(function(){
		if(!jQuery(this).hasClass('mact')){

			jQuery('.mact').removeClass('mact');
			
			jQuery(this).addClass('mact');
			index = jQuery('.method li').index(this);
			jQuery('.path_desc').toggleClass('act');
		}
	})
	clickedCounter = 0;
	jQuery('.ch-item').click(function(){
		if(jQuery(this).hasClass('winned')){
			return false;
		}
		if(clickedCounter>=2){
			return false;
		}
		jQuery(this).toggleClass('clicked');
		clickedCounter++;
		setTimeout(function(){checkCoin();},1500);
	});
	jQuery('#mail').focus(function(){
		if(jQuery(this).val()=="почту"){
			jQuery(this).val('');
		}
	});
	jQuery('.point').hover(function(){
		data = jQuery(this).attr('data');
		jQuery('.h_'+data).addClass('vis').fadeIn();
	},function(){
		data = jQuery(this).attr('data');
		jQuery('.h_'+data).removeClass('vis').fadeOut();
	});
	function checkCoin(){
		if(clickedCounter>=2){
			clickedArray = jQuery('.clicked');
			clickedArray.removeClass('clicked');
			if(jQuery(clickedArray[0]).attr('data')==jQuery(clickedArray[1]).attr('data')&&jQuery(clickedArray[1]).attr('data')!="100"){
				clickedArray.addClass('winned');
				path = jQuery(clickedArray[0]).find('.chimg').attr('src');
				jQuery('.the-prof-img img').attr('src',path);
				jQuery('.goldpass .prof-desc').html(jQuery(clickedArray[0]).find('.hide').html());
				jQuery('.goldpass_frame').css('left',-2000);
			}
			if(jQuery(clickedArray[0]).attr('data')==jQuery(clickedArray[1]).attr('data')&&jQuery(clickedArray[1]).attr('data')=="100"){
				clickedArray.addClass('winned');
				jQuery('.popup').css('top',(jQuery(document).scrollTop()+100)+'px').fadeIn();
				jQuery('.background').fadeIn()
			}
			clickedCounter=0;
		}

	}
	jQuery('#sub').click(function(){
		jQuery.get('index.php?option=com_lotery&tmpl=comp&task=node.write&key='+key+'&mail='+jQuery('#mail').val(),function(data){
			if(data.success=true){
				jQuery('.popup_block,.popup_success').toggle();
				setTimeout(function(){jQuery('.popup,.background').fadeOut();},3000);
			}

		},'json');
		return false;
	});
	jQuery('.popup_close').click(function(){
		jQuery('.popup,.background').fadeOut();
	})
	jQuery('.back,.to-the-game').click(function(){
		jQuery('.goldpass_frame').css('left',-1000);
	});
	jQuery('.terms').click(function(){
		jQuery('.goldpass_frame').css('left',0);
		return false;
	});
	jQuery('.togold').click(function(){
		jQuery('.goldpass_frame').css('left',0);
		return false;
	});
	jQuery('.dog').click(function(){
		jQuery('.topnav_menuul').css('right',-310);	
		jQuery('body').css('overflow','hidden');
		jQuery('.oferta').fadeIn();
		jQuery('.background').fadeIn();
	});
	jQuery('.oferta,.background,.oferta-close').click(function(){
		jQuery('body').css('overflow','auto');
		jQuery('.oferta').fadeOut();
		jQuery('.background').fadeOut();
		jQuery('.popup').fadeOut();
	});
	jQuery('.oferta-dogovor').click(function(event){
		event.stopPropagation();
	});

	initialize();
});

function resizeVideo(){
	width = jQuery(window).width();
	height = jQuery(window).height();
	if((width*9/16)>height){
		delta = parseInt(((width*9/16)-height)/2);
		jQuery('#mainvideo').css('width',width).css('height','auto');
		jQuery('#mainvideo').css('margin-left',0);  
		jQuery('#mainvideo').css('margin-top',-delta);
	}else{
		jQuery('#mainvideo').height(jQuery(window).height()).css('width','auto');
		delta = parseInt(((height*16/9)-width)/2);
		jQuery('#mainvideo').css('margin-top',0);  
		jQuery('#mainvideo').css('margin-left',-delta);
	}
}
var historicalOverlay;
var map;
function initialize() {
  	
  	var styles=[
 {
 "featureType": "administrative",
 "elementType": "labels.text.fill",
 "stylers": [
 {
 "color": "#444444"
 }
 ]
 },
 {
 "featureType": "landscape",
 "elementType": "all",
 "stylers": [
 {
 "color": "#f2f2f2"
 }
 ]
 },
 {
 "featureType": "poi",
 "elementType": "all",
 "stylers": [
 {
 "visibility": "off"
 }
 ]
 },
 {
 "featureType": "road",
 "elementType": "all",
 "stylers": [
 {
 "saturation": -100
 },
 {
 "lightness": 45
 }
 ]
 },
 {
 "featureType": "road.highway",
 "elementType": "all",
 "stylers": [
 {
 "visibility": "simplified"
 }
 ]
 },
 {
 "featureType": "road.arterial",
 "elementType": "labels.icon",
 "stylers": [
 {
 "visibility": "off"
 }
 ]
 },
 {
 "featureType": "transit",
 "elementType": "all",
 "stylers": [
 {
 "visibility": "off"
 }
 ]
 },
 {
 "featureType": "water",
 "elementType": "all",
 "stylers": [
 {
 "color": "#fcfcfc"
 },
 {
 "visibility": "on"
 }
 ]
 }
];
	
	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});   
	
	var latlng = new google.maps.LatLng(55.82129643,49.15596485);
    var mapOptions = {
    	zoom: 16,
		center: latlng,
		disableDefaultUI: true,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		panControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
    }
    
	
    map = new google.maps.Map(document.getElementById('map'), mapOptions);  
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	var imageBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(55.81799238, 49.15102959),
      new google.maps.LatLng(55.82395545, 49.16849913));
	historicalOverlay = new google.maps.GroundOverlay('/images/marker.svg',imageBounds);
	historicalOverlay.setMap(map);
    //map = new google.maps.Map(document.getElementById('map'), mapOptions);  
	/*var myLatlng = new google.maps.LatLng(55.820601,49.161107);
	var image = new google.maps.MarkerImage(
      'images/marker.png',
		new google.maps.Size(166,211),
		new google.maps.Point(0,0),
		new google.maps.Point(66,148)
	);	
	
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    icon:image,
	    clickable: false,	    
	    title: 'KIDSPACE',
	});  */

}

function Scroll(scroll){
	/*if(scroll>60){
		jQuery('.header').addClass('top_menu');
		jQuery('.mainmenu').addClass('ind');
	}else{
		jQuery('.header').removeClass('top_menu');
		jQuery('.mainmenu').removeClass('ind');
	}*/
	height = scroll;
	for(i=0;i<frames.length-1;i++){  
		if(height>(jQuery(frames[i]).position().top-110)&&height<(jQuery(frames[i+1]).position().top-110)){
			current = i;
			jQuery('.color').removeClass('color');
			jQuery('.topnav_menumain li a').eq(current).addClass('color');
		}
	}
  if(height>=jQuery(frames[frames.length-1]).position().top-110){
  	jQuery('.color').removeClass('color');
	jQuery('.topnav_menumain li a').eq(frames.length-1).addClass('color');
	current = frames.length-1;
  }
}