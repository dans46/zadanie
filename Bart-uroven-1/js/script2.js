

$(document).ready(function(){

	$("#pr").hover(function(){
    $("#bg").css('background', 'url("img/priroda.jpg")').css('background-size', 'cover') .css('background-position', 'center center');
  });

  	$("#arch").hover(function(){
    $("#bg").css('background', 'url("img/architecture.jpeg")').css('background-size', 'cover') .css('background-position', 'center center');
  });

  $("#peop").hover(function(){
    $("#bg").css('background', 'url("img/people.jpg")').css('background-size', 'cover') .css('background-position', 'center center');
  });

  $("#food").hover(function(){
    $("#bg").css('background', 'url("img/food.jpg")').css('background-size', 'cover') .css('background-position', 'center center');
  });

  $("#cars").hover(function(){
    $("#bg").css('background', 'url("img/cars.jpeg")').css('background-size', 'cover') .css('background-position', 'center center');
  });




  var ALERT_TITLE = "Pridať kategóriu";
  var ALERT_BUTTON_TEXT = "+ Pridať";
  var CLOSE = "X Zavrieť";

if(document.getElementById) {
  window.alert = function() {
    createCustomAlert();
  }
}

function createCustomAlert() {
  d = document;

  if(d.getElementById("modalContainer")) return;


  mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
  mObj.id = "modalContainer";
  mObj.style.height = d.documentElement.scrollHeight + "px";

  

  alertObj = mObj.appendChild(d.createElement("div"));
  alertObj.id = "alertBox";
  if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
  alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
  alertObj.style.visiblity="visible";

  p = alertObj.appendChild(d.createElement("p"));
  p.appendChild(d.createTextNode(CLOSE));
  p.id = "close";
  p.href = "#";
  p.focus();
  p.onclick = function() { removeCustomAlert();return false; }

  h1 = alertObj.appendChild(d.createElement("h1"));
  h1.appendChild(d.createTextNode(ALERT_TITLE));

  input = alertObj.appendChild(d.createElement("input"));
  $(input).attr('placeholder', 'Zadajte názov kategórie' );
  input.id = "input";

  btn = alertObj.appendChild(d.createElement("a"));
  btn.id = "closeBtn";
  btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
  
}

function removeCustomAlert() {
  document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}

});
