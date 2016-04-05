function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
    var articlecount = 2;
    var articles = '';
    var notices = '';
    var notice = 2;
    var bubblecount = 9;
    var intown = 900;
    var town = 1000;
    if (bubblecount != 0) {
        var somestring = '<div id="rednote">';
        somestring += bubblecount + '</div>';
        $("#bubble").html(somestring);
    }

    function ProgressBar(max,current) {
        var b=0;
        var a = ((current/max)*100) + '%';
        var c = (current/max)*100-3;
            if(c<20){
                alert();
                $('#progress').css({"background-color" : "#00cc33",});
            }
            if(c>80){
                 $('#progress').css({"background-color" : "#ff3333"});
            }

        var d = setInterval(function () {
        b+=c/50;
        $('#progress').css({'width': b+'%'});
            if (b>=c) {
            	$('#progress').css({'width': c+'%'});
                clearInterval(d);
            }
        },20);
    }
    function townstat(max,current) {
        var b = 'В городе: ' + current + ' человек';
        $("#townprogress").html(b);
        b = 'Свободно: ' + (max-current) + ' мест';
        $("#freespace").html(b);
    }
  ProgressBar(town, intown);
  townstat(town, intown);
  var arrayArcticle = [
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: false,
          likes: 8,
		  size:100,
          isLiked: true,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
          isLiked: false,
		  size:100,
		  position:"top"
		  
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
          isLiked: false,
		  size:100,
		  position:"bottom"
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc",
          url: "imgs/article1.png",
          likes: 69,
          isLiked: false,
		  size:50,
		  horizontPos:"right"
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "123123123Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu.",
          url: "imgs/article1.png",
          likes: 69,
          isLiked: false,
		  size: 30,
		  horizontPos:"left"
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
		  size:100,
          likes: 69,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
		  size:100,
          likes: 69,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
		  size:100,
          likes: 69,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
		  size:100,
          likes: 69,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
		  size:100,
          likes: 69,
          isLiked: false,
      },
        {
          title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
          article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "imgs/article1.png",
          likes: 69,
		  size:100,
          isLiked: false,
      }
  ];
    function createElem(id, articleElem){
            var imgLike;
            var currentArticle = '<div class="ArtField" id="'+id+'"><div class="ArtText">';			
            currentArticle += '<div class="ArtTitle">'+articleElem.title+'</div>';
			if(articleElem.size==100){
			if(articleElem.url!=false){
               if(articleElem.position=="bottom"){
			    currentArticle += '<div class="ArtWork">'+articleElem.article+'<div class="ArtImage"><img src='+articleElem.url+'></div></div>';
			    }
			    else{
			    currentArticle += '<div class="ArtWork">'+'<div class="ArtImage"><img src='+articleElem.url+'></div>'+articleElem.article+'</div>';
			    }
			}
			else{currentArticle += '<div class="ArtWork">'+articleElem.article+'</div>';
			}
			}
			else{	
				if(articleElem.horizontPos=="right"){
				  currentArticle += '<div class="ArtWork"><div class="ArtImage" style="float:right; margin-left:10px; width:'+articleElem.size+'%"><img src='+articleElem.url+' width=50% style="float:left"></div>'+articleElem.article+'</div>'; 
				  } 
				  else{
					  currentArticle += '<div class="ArtWork"><div class="ArtImage" style="float:left; margin-right:10px; width:'+articleElem.size+'%"><img src='+articleElem.url+' width=50% ></div>'+articleElem.article+'</div>';}
				  }				
            if(articleElem.isLiked) {
       	        imgLike= "<div class='likediv'><img src=imgs/liked.png></img></div>";
			     }
             else {
                   imgLike= "<div class='likediv'><img src=imgs/nonliked.png></img></div>";
                 }
            currentArticle += '<div class="likeshare"><div class="LikesCount">' + articleElem.likes + '</div>'+ imgLike + '<div class="share"><i class="fa fa-share-alt fa-lg"></i></div></div></div>';
            $(".content").append(currentArticle);
    }
    var  number=0;

    function paging() {
    for (var i = number*5; i < number*5+5; i++) {
      if (i == arrayArcticle.length) break;
      createElem(i, arrayArcticle[i]);
    }
    number++;

    }
        paging();
        $(window).scroll(function() {
          var w_h = $('.content').height();
          //получаем высоту рабочего пространства браузера
          if ($(this).scrollTop()+$(window).height()>w_h){  paging();   //если мы прокрутили сайт вниз больше, чем на первоначально видимую высоту,
            // грузим следующую часть контента.
          }
        });

    for (var i = 1; i <= notice; i++) {
        notices += '<div class="not" id="not' + i + '"></div>';
    }

    $(".notification").html(notices);
    function createNotice(id,text){
            var currentText = '<div class="exet"><i class="fa fa-times"></i></div>';
            currentText += '<div class="shortnot">'+text+'</div>';
            $(".notification #not"+id).html(currentText);
    }
    createNotice(1,"У вашего ребёнка всё хорошо");
    createNotice(2,"А вот теперь у вашего ребёнка траблы");
    if (notice == 0) $(".notice").hide();

    /*$(".exet").on("click", function(event) {
        var target = event.target;
        $($($(target).parent()).parent()).hide();
        notice--;
        if (notice == 0) $(".notice").hide();
    })*/
     $('body').on("click",'.likediv img', function(event) {

        var target = event.target;
        if($(target).attr('src')=='imgs/liked.png') {
       		$(target).attr('src','imgs/nonliked.png');
       		arrayArcticle[$(target).closest('.ArtField').attr('id')].likes--;
    	}
    	else {
    		$(target).attr('src','imgs/liked.png');
       		arrayArcticle[$(target).closest('.ArtField').attr('id')].likes++;
       	}
       		$("#"+$(target).closest('.ArtField').attr('id')+' .LikesCount').html(arrayArcticle[$(target).closest('.ArtField').attr('id')].likes);
        });
	 $(".exet").click(function () {
      $(this).parent().slideUp("slow");
        notice--;
        if (notice == 0) $(".notice div").slideUp("slow");});
		
});
