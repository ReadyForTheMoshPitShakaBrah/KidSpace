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
    for (var i = 1; i <= articlecount; i++) {
        articles += '<div id="' + i + '"></div>';
    }
    $(".content").html(articles);
    function createElem(id,title,article,imgUrl){
            var currentArticle = '<div class="ArtTitle">'+article+'</div>';
            var currentTitle = '<div>'+title+'</div>';
            var currentImgUrl = '<div>'+imgUrl+'</div>';
            $(".content #"+id).html(currentTitle+currentArticle+currentImgUrl);
    }
    createElem(1,"Заголовок","текст","URL");
    createElem(2,"Заголовок","текст","URL");   
    var notice=2;   
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
    $(".exet").on("click", function(event) {
        var target = event.target;
    $($(target).parent()).hide();
        })  
});