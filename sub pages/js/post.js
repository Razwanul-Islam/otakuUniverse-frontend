var myVideo = document.querySelector(".carsoul-video");

function next(){
    first= first-50;
    if(first > -200){
        myVideo.style.left =first + "%";
    }
    else{
      first=-200;
      myVideo.style.leftt =first + "%";


    }
}
function prev(){

    first= first+50;

    if(first <= 0){
      myVideo.style.left =first + "%";
    }
    else{
      first=0;
      myVideo.style.left =first + "%";
  
  
    }
}



// Sugg- slider

var first =0;

var mybox = document.querySelector(".carsoul-suggest");


document.querySelector(".sugg-icon-right").addEventListener("click", function(){

    first= first-50;
    if(first > -200){
        mybox.style.left =first + "%";
    }
    else{
      first=-200;
      mybox.style.leftt =first + "%";


    }
});



document.querySelector(".sugg-icon-left").addEventListener("click", function(){
    first= first+50;

  if(first <= 0){
    mybox.style.left =first + "%";
  }
  else{
    first=0;
    mybox.style.left =first + "%";


  }
});


        
 






//  For Image slider


var photos = ["./Image/image 4.png","./Image/image 2.png","./Image/image 3.png","./Image/image 2.png"];
var imgTag = document.querySelectorAll("a img")[0];
var img2 = document.querySelector(".img-2");
count =0;

function nextImg(){
    count++;

    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
        img2.src = photos[count+1];
    }
    else{

        imgTag.src = photos[count];
        img2.src = photos[count-1];
    }
}

function prevImg(){
    count--;

    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
        img2.src = photos[count];

    }
    else{

        imgTag.src = photos[count];
        img2.src = photos[count+1];


    }
}




// SunNav sheir btn start

var sheir_btn = document.querySelector(".sheir-btn");

function singleClick() {
    document.querySelector(".subNav-socal-icon-list").style.display = "block";
}

function doubleClick() {
    document.querySelector(".subNav-socal-icon-list").style.display = "none";
}
sheir_btn.addEventListener("click", function(){
    clickCount++;
    if (clickCount === 1) {
            singleClick();
        }
     
    else if (clickCount === 2) {
        doubleClick();
        clickCount = 0;
    }
});
//              SunNav sheir btn end


//                           Doubleclick  single click  event
// video previews start
var previews = document.querySelector(".previews");
var previews_click = document.querySelector(".previews-click");

function singleClick1() {
    document.querySelector(".previews").style.display = "block";

}
function doubleClick1() {
    document.querySelector(".previews").style.display = "none";

}
var clickCount = 0;
previews_click.addEventListener("click", function(){
    clickCount++;
    if (clickCount === 1) {
            singleClick1();
        }
     
    else if (clickCount === 2) {
        doubleClick1();
        clickCount = 0;
    }
});
// video previews End



//                    For socal icon
var my_icon = document.querySelector(".reviews-sheir-icon");

function singleClick2() {
    document.querySelector(".reviews-socal-icon-list").style.display = "block";

}

function doubleClick2() {
    document.querySelector(".reviews-socal-icon-list").style.display = "none";


}
var clickCount = 0;

my_icon.addEventListener("click", function(){
    clickCount++;
    if (clickCount === 1) {
            singleClick2();
        }
     
    else if (clickCount === 2) {
        doubleClick2();
        clickCount = 0;
    }
});






