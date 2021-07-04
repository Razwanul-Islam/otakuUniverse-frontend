var myVideo = document.querySelector(".carsoul-video");

function next(){
    // alert("clicked");
    // video.src = "./Image/video2.mp4";
    // myVideo.style.backgroundColor = "red";
      var a=-100;
    myVideo.style.left = a + "%";
}
function prev(){
    // alert("clicked");
    // myVideo.innerHTML = "black";
    // myVideo.style.backgroundColor = "red";
    myVideo.style.left = "0%";
}




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


// var first =0;

// let next = document.querySelector(".img-container");
// let prev = document.querySelector(".img-container");


// document.querySelector(".btnNext").addEventListener("click", function(){
  // alert("click");
  // next.classList.add("first");
    // next.classList.add("first");
//     first= first-50;
//     if(first > -200){
//       next.style.left =first + "%";
//     }
//     else{
//       first=-150;

//       next.style.left =first + "%";


//     }
// });

// document.querySelector(".btnPrev").addEventListener("click", function(){
//   first= first+50;
//   if(first <= 0){
//     next.style.left =first + "%";
//   }
//   else{
//     first=0;

//     next.style.left =first + "%";


//   }
// });




