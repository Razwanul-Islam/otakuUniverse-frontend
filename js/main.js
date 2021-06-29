var collapse=true;
$(document).ready(function(){$('#menu-trigger').click(function(){
    if(collapse){$('#side-menu').animate({"width":"0px"});collapse=false;}else{$('#side-menu').animate({"width":"250px"});collapse=true;} 
});//menutrigger click ends
let h=String($(".poster").width()*1.4)+"px"
$(".poster").css({'height':h});
});//document.ready ends

// for sidebar
$("#sidebar").mousedown(function (e) {
    e.preventDefault();
  });
  let focused = false;
  $("#nav__btn").click(function () {
    if (focused) {
      $("#nav__btn").blur();
      focused = false;
    } else {
      focused = true;
    }
  });
  $("#nav__btn").focusout(function () {
    focused = false;
  });
  
