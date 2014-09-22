var num = 1;
num++;
alert(num);



function math(){
	a = 20;
	alert(a);
}

function add(){
  var a = 40;
	var b = 30;
	var sum = (a + b);
	alert(sum);
}
alert(a);
// If you don't run the first math function , the 2nd function will think a = 10 not 20.
// wats suppose to happen is that once you declare a variable, you can reassign a value to it
// anywhere afterwards.

function math2(){
	var a;
	alert(a);
	a = 10;
}


function tostring1(){
	var a = 10;
	a = a.toString();
	var b = 20;
	var sum = a + b;
	alert(sum);
}

