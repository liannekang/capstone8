$(document).ready(function(){

//--1--//

// Skrollr
$(function() {var s = skrollr.init();})
// 


$.ready(function(){
  $(window).on('scroll', function(e){
    $('#scroll-container').innerText = $(window).scrollTop();
  });
});


  // $("#arrow").on('click', function(event) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){
   
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });




// Quiz


//Global:
var survey = []; //Bidimensional array: [ [1,3], [2,4] ]

//Switcher function:
$(".rb-tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
  // $('html, body').animate({
  //           scrollTop(4000)
  //       }, 500);
});

//!!!!!!!!!!!!!!!! 
// $(".bullet-item-link").click(function(){
//   $(this) .parent().find(".bullet-item-link").removeClass("active");
//   $(this) .addClass("active");
// });
// !!!!!!!!!!!!


//Save data:
$(".trigger").click(function(){
  //Empty array:
  survey = [];
  //Push data:
  for (i=1; i<=$(".rb").length; i++) {
    var rb = "rb" + i;
    var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
    //Bidimensional array push:
    survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
  };
  //Debug:
  debug();
});

//Debug:
function debug(){
  var debug = "";
  for (i=0; i<survey.length; i++) {
    debug += "Nº " + survey[i][0] + " = " + survey[i][1] + "\n";
  };
  alert(debug);
};


});