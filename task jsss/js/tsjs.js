
////////////////////////////////////////////////////////////
var arr=[200,"ahmed" ,"hi",true,false,"m","css","hi"];
 console.log(arr)
///////////////////////////////////////////////////////////
if(Array.isArray(arr)){
  console.log("true ,this is array")
}
else{console.log("false ,this is not array")}
//////////
if (arr.constructor===Array){
  console.log("true again ,this is array")
}
else{console.log("false ,this is not array")}
///////////////////////////////////////////////////////////
console.log("length of array"+ "= " +arr.length)
///////////////////////////////////////////////////////////
var z= arr.lastIndexOf("hi");
console.log("last index of hi"+"= "+ z)
console.log(arr)
//////////////////////////////////////////////////////////
var x= arr.indexOf("hi");
console.log("first index of hi"+"= " + x)
console.log(arr)
//////////////////////////////////////////////////////////
console.log("convert array to string "+": "+arr.toString())
////////
console.log("convert array to string "+": "+ arr.toLocaleString())
//////////////////////////////////////////////////////////
arr.shift()
arr.splice(2,2)
arr.pop()
console.log(arr)
/////////////////////////////////////////////////////////
arr.unshift("yara")
arr.splice(2,0,"yara")
arr.push("yara")
console.log(arr)
////////////////////////////////////////////////////////
arr.sort();
console.log(arr)
///////////////////////////////////////////////////////
arr.reverse();
console.log(arr)
//////////////////////////////////////////////////////
var arr2=[1,2,3,4];
console.log(arr.concat(arr2))
