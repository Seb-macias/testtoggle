var amountOne = document.querySelector(".amount-1");
var parserOne = amountOne.textContent;
var total1 = parseFloat(parserOne);

var amountTwo = document.querySelector(".amount-2");
var parserTwo = amountTwo.textContent;
var total2 = parseFloat(parserTwo);

var amountThree = document.querySelector(".amount-3");
var parserThree = amountThree.textContent;
var total3 = parseFloat(parserThree);

// Checkbox Reputation Management:

function checkboxOne() {
  var text1 = document.getElementById("rep-1");
  var text2 = document.getElementById("rep-2");
  var text3 = document.getElementById("rep-3");
  var text4 = document.getElementById("Platforms-1");
  var text5 = document.getElementById("Platforms-2");
  var text6 = document.getElementById("Platforms-3");
  const recalculateText1 = document.querySelector(".amount-1");
  const recalculateText2 = document.querySelector(".amount-2");
  const recalculateText3 = document.querySelector(".amount-3");

  if (document.getElementById("myCheck").checked) {
    text1.style.display = "list-item";
    text2.style.display = "list-item";
    text3.style.display = "list-item";
    text4.style.display = "list-item";
    text5.style.display = "list-item";
    text6.style.display = "list-item";    
    total1 += 61;
    total2 += 61;
    total3 += 61;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  } else {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
    text6.style.display = "none";    
    total1 -= 61;
    total2 -= 61;
    total3 -= 61;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  }
}

// Checkbox Content Creation:

function checkboxTwo() {
  var text1 = document.getElementById("con-1");
  var text2 = document.getElementById("con-2");
  var text3 = document.getElementById("con-3");
  var t_conv4= document.getElementById("con-v4");
  var t_conv5= document.getElementById("con-v5");

  const recalculateText1 = document.querySelector(".amount-1");
  const recalculateText2 = document.querySelector(".amount-2");
  const recalculateText3 = document.querySelector(".amount-3");

  if (document.getElementById("myCheck2").checked) {
    text1.style.display = "list-item";
    text2.style.display = "list-item";
    text3.style.display = "list-item";
    t_conv4.style.display = "list-item";
    t_conv5.style.display = "list-item";

    total1 += 30;
    total2 += 40;
    total3 += 50;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  } else {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    t_conv4.style.display = "none";
    t_conv5.style.display = "none";

    total1 -= 30;
    total2 -= 40;
    total3 -= 50;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  }
}

// Checkbox Bilingual:

function checkboxThree() {
  var text1 = document.getElementById("bi-1");
  var text2 = document.getElementById("bi-2");
  var text3 = document.getElementById("bi-3");
  const recalculateText1 = document.querySelector(".amount-1");
  const recalculateText2 = document.querySelector(".amount-2");
  const recalculateText3 = document.querySelector(".amount-3");

  if (document.getElementById("myCheck3").checked) {
    text1.style.display = "list-item";
    text2.style.display = "list-item";
    text3.style.display = "list-item";
    total1 += 50;
    total2 += 50;
    total3 += 50;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  } else {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    total1 -= 50;
    total2 -= 50;
    total3 -= 50;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  }
}

// Checkbox Logo Design:

function checkboxFour() {
  var text1 = document.getElementById("logo-1");
  var text2 = document.getElementById("logo-2");
  var text3 = document.getElementById("logo-3");
  var l_text4 = document.getElementById("logo-4");
  var l_text5 = document.getElementById("logo-5");
  var l_text6 = document.getElementById("logo-6");

  const recalculateText1 = document.querySelector(".amount-1");
  const recalculateText2 = document.querySelector(".amount-2");
  const recalculateText3 = document.querySelector(".amount-3");

  if (document.getElementById("myCheck4").checked) {
    text1.style.display = "list-item";
    text2.style.display = "list-item";
    text3.style.display = "list-item";
    l_text4.style.display = "list-item";
    l_text5.style.display = "list-item";
    l_text6.style.display = "list-item";

    total1 += 25;
    total2 += 25;
    total3 += 25;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  } else {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    l_text4.style.display = "none";
    l_text5.style.display = "none";
    l_text6.style.display = "none";

    total1 -= 25;
    total2 -= 25;
    total3 -= 25;
    recalculateText1.innerHTML = total1;
    recalculateText2.innerHTML = total2;
    recalculateText3.innerHTML = total3;
  }
}

scroll: (function () {
  var Elem1 = document.getElementById("chart");

  var builderBox = document.getElementById("packageBuilder");
  var builderHeight = builderBox.offsetHeight
  // var topPos = Elem1.offsetTop;


  var distanceScrolled = window.scrollY;
  var elemRect = Elem1.getBoundingClientRect();
  var elemViewportOffset = elemRect.top;
  var topPos = distanceScrolled + elemViewportOffset - builderHeight;;

  console.log("distanceScrolled is " + distanceScrolled)

  console.log("elemViewportOffset is " + elemViewportOffset)

  //CONFIGURATION
  var headerClassName = "builder"; //Class of your header element
  var PriceChart = document.getElementById("chart");
  var stickyAfter = topPos; //Show fixed header after this Y offset in px
  var header = document.getElementsByClassName(headerClassName)[0];
  var lastElement = document.getElementById("lastBox");

  // var bottomPos = lastElement.offsetTop + lastElement.offsetHeight;

  var elemRect2 = lastElement.getBoundingClientRect();
  var elemViewportOffset2 = elemRect2.bottom;
  var bottomPos = distanceScrolled + elemViewportOffset2;;
  console.log(bottomPos + "is bottm pos")


  var initializeHeader = function () {
    document
      .getElementsByClassName(headerClassName)[0]
      .classList.add("initialized");
    return true;
  };

  window.onscroll = function() {
    var cl = document.body.classList;
    var foo =window.pageYOffset + lastElement.offsetHeight;
    (window.pageYOffset > stickyAfter && foo < bottomPos) ? 
      initializeHeader() && cl.add('sticky-z') : 
      cl.remove('sticky-z');
};
})();
