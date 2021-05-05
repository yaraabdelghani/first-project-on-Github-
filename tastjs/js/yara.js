function calculat() {
  "use strict"
  var x= document.getElementById("num1").value,
      y= document.getElementById("num2").value,
      z= document.getElementById("num3").value;
var   n=(x*2)+(y*4)+(z*4);
 document.getElementById("output").innerHTML= n ;
}

/////////////////////////////////////////////////////////////////////////////
function cal() {
  "use strict"
  var age= document.getElementById("old").value,
      house= document.getElementById("houses").value;
  var z= age/house;
 document.getElementById("output2").innerHTML= z ;
}

/////////////////////////////////////////////////////////////////////////////
(function selfInvoking() {
  document.getElementById("test3").innerHTML="hello everyone :) "+" this is function self invoking";
  alert("Hi ,this is function self invoking")
}());
