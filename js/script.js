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
    function ProgressBar(max,current) {
        var a = ((current/max)*100-2) + '%';
        $('#progress').css({'width': a});
    }
  ProgressBar(1000, 470);
    for (var i = 1; i <= articlecount; i++) {
        articles += '<div class="ArtField" id="' + i + '"></div>';
    }
    $(".content").html(articles);
    function createElem(id,title,article,imgUrl){
            var currentArticle = '<div class="ArtText">'
            currentArticle += '<div class="ArtTitle">'+article+'</div>';
            currentArticle += '<div>'+title+'</div>';
            currentArticle += '<div>'+imgUrl+'</div></div>';
            $(".content #"+id).html(currentArticle);
    }
    createElem(1,"Заголовок","текст","URL");
    createElem(2,"Заголовок","текст","URL");   
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
});