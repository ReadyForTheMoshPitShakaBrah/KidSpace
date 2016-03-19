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
    for (var i = 0; i < articlecount; i++) {
        articles += '<div class="ArtField" id="' + i + '"></div>';
    }
    $(".content").html(articles);
    function createElem(id, articleElem){
            var imgLike;
            var currentArticle = '<div class="ArtText">'
            currentArticle += '<div class="ArtTitle">'+articleElem.title+'</div>';
            currentArticle += '<div class="ArtWork">'+articleElem.article+'</div>';
            if (articleElem.url != false) {
                currentArticle += '<div class="ArtImage"><img src='+articleElem.url+'></div>';
            }
            if(articleElem.isLiked) {            
       	        imgLike= "<div class='likediv'><img src=imgs/liked.png></img></div>";
			}
            else {
                imgLike= "<div class='likediv'><img src=imgs/nonliked.png></img></div>";
              }
            currentArticle += '<div class="likeshare" id="likeshare'+id+'">' + articleElem.likes + '</div>'+imgLike + '</div>';
            $(".content #"+id).html(currentArticle);
    }
    var arrayArcticle = [
          {
            title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
            article: "Some text for article #1",
            url: false,
            likes: 8,
            isLiked: true,
        },
          {
            title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
            article: "Some text for article #2", 
            url: "imgs/article1.png",
            likes: 69,
            isLiked: false,
        }
    ];
    createElem(0, arrayArcticle[0]);
    createElem(1, arrayArcticle[1]);   
    for (var i = 1; i <= notice; i++) {
        notices += '<div class="not" id="not' + i + '"></div>';
    }
    $(".notification").html(notices);  
    function createNotice(id,text){
            var currentText = '<div class="exet"> X </div>';           
            currentText += '<div class="shortnot">'+text+'</div>';
            $(".notification #not"+id).html(currentText);
    }
    createNotice(1,"blalalal");  
    createNotice(2,"FUCKU");
    if (notice == 0) $(".notice").hide();
    $(".exet").on("click", function(event) {
        var target = event.target;
        $($(target).parent()).hide();
        notice--;
        if (notice == 0) $(".notice").hide();
    })  
     $('.likediv').on("click", function(event) {
        var target = event.target;
        if($(target).attr('src')=='imgs/liked.png') {
       		$(target).attr('src','imgs/nonliked.png');
       		arrayArcticle[$(target).closest('.ArtField').attr('id')].likes--;
    	}
    	else {
    		$(target).attr('src','imgs/liked.png');
       		arrayArcticle[$(target).closest('.ArtField').attr('id')].likes++;
       	}
       		$('#likeshare'+$(target).closest('.ArtField').attr('id')).html(arrayArcticle[$(target).closest('.ArtField').attr('id')].likes);
        });
});