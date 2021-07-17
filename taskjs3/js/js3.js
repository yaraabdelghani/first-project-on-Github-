////////////////////////////////////////////////////////////
var mystring="this is a string";
mystr=mystring.split(" ");
console.log(mystr);
////////////////////////////////////////////////////////////
ascii= mystring.charCodeAt(3)
console.log("the ascii of index 3"+": "+ascii);
////////////////////////////////////////////////////////////
upper= mystring.toUpperCase()
console.log("upper case"+": "+ upper);
////////////////////////////////////////////////////////////
one= mystring.slice(10,16)
two= mystring.substr(10,6)
three= mystring.substring(10,16)
console.log("last 6 characters"+ ": "+ one);
console.log("last 6 characters"+ ": "+ two);
console.log("last 6 characters"+ ": "+ three);
////////////////////////////////////////////////////////////
reeplace= mystring.replace("a string" ,"my string");
console.log( "replace"+": "+reeplace);
////////////////////////////////////////////////////////////
index= mystring.charAt(3)
console.log("characters of index 3 "+": "+ index);
////////////////////////////////////////////////////////////
var stringtonum="180$"
var num=parseInt(stringtonum);
console.log("convert string to number"+": "+num);
////////////////////////////////////////////////////////////
var set= Math.max(12,25,30,50,80,65,70)
console.log("maximum number"+": "+set);
////////////////////////////////////////////////////////////
function even(){
var y=document.getElementById("div").value;
for( i=0;i<=y;i++){
   if(i%2==0){
    console.log(i);
  }
}
};
////////////////////////////////////////////////////////////
var string="               hello world  ";
trimm= string.trim();
console.log(trimm);
