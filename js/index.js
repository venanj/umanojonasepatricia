//Barra de Progresso
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("mybar").style.width = scrolled + "%";
}
//Final barra de progresso

//Menu drop 
//* Fazer um loop em todos os botões suspensos para alternar entre ocultar e mostrar seu conteúdo suspenso - isso permite que o usuário tenha vários menus suspensos sem nenhum conflito */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
//final menu drop
//Menu Lateral
/*Defina a largura da barra lateral para 250px e a margem esquerda do conteúdo da página para 250px*/
function opennav() {
    document.getElementById("mysidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

/* Defina a largura da barra lateral como 0 e a margem esquerda do conteúdo da página como 0 */
function closenav() {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
//Final menu lateral
// Quando o usuário rola a página, execute myFunction
window.onscroll = function() {myFunction()};
//TimeLine
(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this)
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
          selectors.item.last().addClass(selectors.activeClass)
        } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        
      });
    });

  }
})(jQuery);
$("#timeline-1").timeline();
//Final Timeline

//Galeria
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt; 
  
}
//Final galeria
    

