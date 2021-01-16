
function calculation(){
  "use strict";
  var x=Number(document.getElementById("fnum").value),
      y=Number(document.getElementById("snum").value),
      z=x+y;

  if (x==0||y==0) {
    document.getElementById("plus").innerText="enter number??";
  }
  else if (isNaN(x)||isNaN(y)) {
    alert("focus on what you write");
    document.getElementById("plus").innerText="sorry not anumber??";
  }
  else {
      document.getElementById("plus").innerText=z ;
  }
};
///////////////////////////////////////////////////////////////////////////////

  function myprompt(){
    "use strict";
   var y=prompt("say some thing");
   document.getElementById("ttt").innerHTML=y;
 };
////////////////////////////////////////////////////////////////////////////////

function mydate(){
  "use strict";
  var y= new Date();
  document.getElementById("date").innerHTML=y;
};
////////////////////////////////////////////////////////////////////////////////

function mystring(){
  "use strict";
  var y=document.getElementById("str").value,
      x=y.length+1;
      document.getElementById("pstr").innerHTML=x;
}
////////////////////////////////////////////////////////////////////////////////

function myarray(){
  "use strict";
  var
       y=document.getElementById("arr").value,
       y2=[],
       yy=["first name is :","second name is :","third name is :"],
       i,
       m;
for (i=0;i<y;i++){
    if (i>18){break;}
    var z=i+1;
    y2[i]=prompt("enter number:"+z);
}

    var com=[];
for(m=0;m<=y-1;m++){
  com[m]=yy[m]+y2[m]+"<br>";
}
document.getElementById("chdiv").innerHTML=com.join("");
}
