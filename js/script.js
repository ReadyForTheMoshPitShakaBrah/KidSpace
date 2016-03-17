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
    var intown = 80;
    var town = 100;
    if (bubblecount != 0) {
        var somestring = '<div id="rednote">';
        somestring += bubblecount + '</div>';
        $("#bubble").html(somestring);
    }
    function ProgressBar(max,current) {
        var a = ((current/max)*100-2) + '%';
        $('#progress').css({'width': a});
    }
    function townstat(max,current) {
        var b = 'В городе: ' + current + ' человек';
        $("#townprogress").html(b);
        b = 'Свободно: ' + (max-current) + ' мест';
        $("#freespace").html(b);
    }
  ProgressBar(town, intown);
  townstat(town, intown);
    for (var i = 1; i <= articlecount; i++) {
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
                imgLike= "<img id='hearton' src='imgs/liked.png'>";
            }
            else {
                imgLike= "<img id='heartoff' src='imgs/nonliked.png'>";
            }
            currentArticle += '<div class="likeshare">' + articleElem.likes + imgLike +  '</div></div>';
            $(".content #"+id).html(currentArticle);
    }
    var article1 = {
        title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
        article: "Some text for article #1",
        url: false,
        likes: 8,
        isLiked: false,
    }
    var article2 = {
        title: "ВСЕ СЛЕДЫ ВЕДУТ В КИДСПЕЙС",
        article: "Some text for article #2",
        url: "imgs/article1.png",
        likes: 69,
        isLiked: true,
    }
    createElem(1, article1);
    createElem(2, article2);
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
     $('#heartoff').on("click", function(event) {

     })
    $('#hearton').on("click", function(event) {
        var target = event.target;
        alert($($($(target).parent()).parent()).getAttr("id"));

    })
});
