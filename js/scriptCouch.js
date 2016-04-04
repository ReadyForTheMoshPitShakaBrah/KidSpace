function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include ("jquery-2.2.1.min.js");
$(document).ready(function() {
  var string;
  function zvezd(numbstars) {
    if (numbstars==1) {
      return "<i class='fa fa-star'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i>";
    }
    if (numbstars==2) {
      return "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i>";
    }
    if (numbstars==3) {
      return "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i>";
    }
    if (numbstars==4) {
      return "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o'></i>";
    }
    if (numbstars==5) {
      return "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>";
    }
  }
  var mark;
  var arrayCoaches = [
        {
          name: "Сергей",
          surname: "Смирнов",
          age: "56",
          stars: 3,
          comments:
          [
             {
            comentator: "Валентина Иванова",
            starscom: 3,
            text: " Я самый клутой"
             },
             {
            comentator: "Валентина Иванова",
            starscom: 3,
            text: " Я альтернатива"
             },
             {
            comentator: "Валентина Иванова",
            starscom: 3,
            text: " Я альтернатива"
             },

          ]
      },
      {
          name: "Анатолий",
          surname: "Петров",
          age: "24",
          stars: 2,
          comments:
          [
             {
            comentator: "Валентина Иванова",
            starscom: 5,
            text: " Самый длинный в мире комменатрий"
             }
          ]
      },
      {
          name: "Володя",
          surname: "Путин",
          age: "34",
          stars: 5,
          comments:
          []
      },
      {
          name: "Николай",
          surname: "Цветаев",
          age: "34",
          stars: 4,
          comments:
          [
             {
            comentator: "Валентина Иванова",
            starscom: 3,
            text: "  Самый длинный в мире комменатрий"
             },
              {
            comentator: "Валентина Иванова",
            starscom: 5,
            text: "  Самый длинный в мире комменатрий"
             }
          ]
      }
  ];
  var numcomment=[];
		for ( var i=0 ; i<arrayCoaches.length;i++) {
      string="";
      string+="<div class = 'comment'><div class='left'><img id='coachimg' src='imgs/наставник.png'><div class='coachname'>";
      string+="<p class='stars'>"+zvezd(arrayCoaches[i].stars) +"</p><p>"+arrayCoaches[i].name+"</p><p>"+arrayCoaches[i].surname+"</p><p class='age'>"+arrayCoaches[i].age+" лет</p>";
      string+="</div></div>";
      if(arrayCoaches[i].comments.length>0) {
        string+="<div id ='"+i+"'class='right'><div><div class='numb'>"+arrayCoaches[i].comments.length+" отзывов</div><div id='"+i+"'' class='addcom'>Добавить отзыв</div></div>";
        string+="<div id='"+i+"' class='prev'><img id="+i+" src='imgs/стрелка налево.png'></img></div><div id='content'><div class='screen'id='"+i+"' style='width:"+arrayCoaches[i].comments.length*300+ "px;'>";
        for(var k=0;k<arrayCoaches[i].comments.length;k++) {
          numcomment.push('0');
          string+="<div class='com'><div class='author'><img id='comentatorimg' src='imgs/коментатор.jpg'><div class='comentatorname'><p>"+arrayCoaches[i].comments[k].comentator+"</p><p>"+zvezd(arrayCoaches[i].comments[k].starscom)+"</p></div></div>";
          string+="<div class='text'>"+arrayCoaches[i].comments[k].text+"</div></div>";
        }
        string+="</div></div><div id='"+i+"' class='next'><img id="+i+" src='imgs/стрелка направо.png'></img></div>";
      }
      else {
         string+="<div id="+i+" class='right'><div><div class='numb'>Нет отзывов</div><div id='"+i+"' class='addcom'>Добавить отзыв</div></div>";
      }
      string+="</div><div id="+i+" class='adding'><textarea cols='40' rows='3' class='textbox' text=''maxlength=350 id="+i+"></textarea><div><div class='rating'><span id='5'>☆</span><span id='3'>☆</span><span id='3'>☆</span><span id='2'>☆</span><span id='1'>☆</span></div><div id="+i+" class='send'>ОТПРАВИТЬ</div></div></div></div></div>";
      $('.main').append(string);
      $("#"+i+".adding").hide();
    }
    current_element=0;
    width = 300,
    height = 100,
    duration = 500;

function move_screen (x,id,count_elements,current_element) {
    // Сдвинуть карусель на x элементов
    current_element = (current_element + x) % count_elements;
    if (current_element < 0) {current_element += count_elements;}
    $("#"+id+".screen").animate({
        marginLeft: - width * current_element
    }, duration);
   numcomment[id]=current_element;
}

$("body").on('click','.prev', function (event) {
    var target = event.target;
    var id=$(target).attr('id');
    move_screen(-1, id, arrayCoaches[id].comments.length,numcomment[id]);
})

$("body").on('click','.next', function (event) {
    var target = event.target;
    var id=$(target).attr('id');
    move_screen(1, id, arrayCoaches[id].comments.length, numcomment[id]);
})
$("body").on('click','.addcom', function (event) {
 var target=event.target;
 $("#"+$(target).attr('id')+".right").hide();
 $("#"+$(target).attr('id')+".adding").show();
})
$("body").on('click','.rating', function(event) {
  var target = event.target;
  mark = $(target).attr('id');
});
$("body").on('click','.send', function(event) {
  var target=event.target;
  if(mark!=undefined){
  //tyt doljen bit tekst otpravki zaprosa
  $("#"+$(target).attr('id')+".right").show();
  $("#"+$(target).attr('id')+".adding").hide();
  $("#"+$(target).attr('id')+".right").empty();
  i= $(target).attr('id');
  var str=$("#"+i+".textbox").val();
  var stroka="";
  arrayCoaches[i].comments.push(
  {
     comentator: "marina vagina",
     starscom: mark,
     text: str
  })
  stroka+="<div><div class='numb'>"+arrayCoaches[i].comments.length+" отзывов</div><div id='"+i+"' class='addcom'>Добавить отзыв</div></div>";
  stroka+="<div id='"+i+"' class='prev'><img id="+i+" src='imgs/стрелка налево.png'></img></div><div id='content'><div class='screen'id='"+i+"' style='width:"+arrayCoaches[i].comments.length*300+ "px;'>";

  for(k=0;k<arrayCoaches[i].comments.length;k++) {
          stroka+="<div class='com'><div class='author'><img id='comentatorimg' src='imgs/коментатор.jpg'><div class='comentatorname'><p>"+arrayCoaches[i].comments[k].comentator+"</p><p>"+zvezd(arrayCoaches[i].comments[k].starscom)+"</p></div></div>";
          stroka+="<div class='text'>"+arrayCoaches[i].comments[k].text+"</div></div>";
        }
        stroka+="</div></div><div id='"+i+"' class='next'><img id="+i+" src='imgs/стрелка направо.png'></img></div>";
        $("#"+$(target).attr('id')+".right").append(stroka);
  }})
});
