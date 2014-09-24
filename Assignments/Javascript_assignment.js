function ifElse1()
{
	var age = prompt("Enter age");
	age = parseInt(age);
	if (age <= 14) {
		alert("Not allowed");
	}
	if (age > 14 && age < 65) {
		alert("Regular Price");
	}


	if (age == 70) {
		alert("Special Discount");
	}


}


function ifElse2()
{
	var age = prompt("Give me your age");
	if (age == 14) {
		alert("Coupon 1");
	}
	else if (age == 21) {
		alert("Coupon 2");
	}
	else if (age == 30) {
		alert("Coupon 3");
	}
	else if (age == 50) {
		alert("Special Discount");
	}
	else {
		alert("no coupon");
	}
}

function ifElse3()
{
	var day = prompt("Type in a day of the week");

	if (day === "Monday")
	{

		alert("Monday we serve pasta");

	}

	else if (day === "Tuesday")
	{

		alert("Tuesday's we serve spaghetti");

	}

	else if (day === "Wednesday")
	{

		alert("Wednesdays we serve pizza");

	}

	else if (day === "Thursday")
	{
		alert("Thursdays we serve ass food");
	}

	else if (day === "Friday")
	{

		alert("Friday's is a buffet");

	}

	else {
		alert("That's not a day dude");
	}

}

function switchDemo()
{
	var age = prompt("Give me your age");
	age = parseInt(age);
	switch(age)
	{

		case(14):
		{
			alert("Coupon 1");
			break;
		}

		case(21):
		{
			alert("Coupon 2");
			break;
		}

		case(30):
		{
			alert("Coupon 3");
			break;
		}

		case(50):
		{
			alert("Coupon 4");
			break;
		}

		default:
		{
			alert("No Coupon");
			break;
		}

	}

}

function primeNumbers()
{
	var count = 0;
	var num = prompt("Enter your number to see the prime numbers up to it");

	for (var x = 1; x <= num ; x++)
	{
		for (var y = 1; y <= x; y++)
		{
			if (x % y == 0)
			{
				count++;
			}
		}

	if (count == 2)
	{
		document.write( x + " is a prime number <br>");
	}

	else {
		document.write( x + "is not prime <br>");
	}

	count = 0;
	}




}

function oscars()
{

	var oscars = prompt("Enter the year to find out which oscar was given");

	if (oscars == 2011)
	{
		alert("Breaking BAD movie");
	}

	else if (oscars == 2012)
	{
		alert("Lion King and shit");
	}

	else if (oscars == 2013)
	{

		alert("Inception");
	}

	else if (oscars == 2014)
	{
		alert("Movie 10");
	}

	else
	{
		alert("Please enter a year between 2010 and 2014");
	}

}

function switchProgram2()
{
	var day = prompt("Enter a day of the week");
	switch(day)

	{

		case("Monday"):
		{
			alert("Today we serve pasta");
			break;
		}

		case("Tuesday"):
		{
			alert("Today we serve Pizza");
			break;
		}

		case("Wednesday"):
		{
			alert("Today we serve shit");
			break;
		}

		case("Thursday"):
		{
			alert("Today we serve burritos");
			break;
		}

		default:
		{
			alert("WE DON'T SERVE SHIT THAT DAY");
			break;
		}

	}

}


function math()
{
    var count = 0;
    var num = prompt("Enter a number here to see prime numbers up to your input");

    for(var x = 1; x <= num ; x++)
    {
        for(var y = 1; y <= x; y++)
        {
         if (x % y == 0)
            {
                count++;
            }
        }
        if (count == 2)
        {
            document.write( x + "This number is prime <br>");
        }
        else
        {
            document.write( x + "This number is not prime <br>");
        }

        count = 0;
    }

}

// The purpose of the following function is to print #s from 1 to 10 //
function printNum1()
{
	for (var x = 1; x <= 10; x++)
	{
		document.write(x + "<br>");
	}
}

// This function prints from 10 to 1

function printNum1Reverse()
{
	for (var x = 10; x >= 1; x--)
	{
		document.write(x + "<br>");
	}
}

// This function prints odd numbers from 1 to 50

function oneToFifty()
{
	for (var x = 1; x <= 50; x += 2)
	{
		document.write(x + "<br>");
	}
}

function testingIncrementConcept()
{
	var i = 0;
	var j = 0;
	var k = 0;

	i = 5;

	j = i++;
	k = ++i;

	alert(i);
	alert(j);
	alert(k);
// ANSWER IS i = 7 , j = 5 , k = 7;
}

// The function below is to print even numbers from 1 to 100
function evenNum()
{ //this statement guarantees all x values are gonna be even, if i were to do x++ and increment each value of x by 1. then we would have to test it so we avoid getting odd numbers and only even numbers, you'll probably use a modulus operator % to confirm if it is even (with 0 remainder) or if its odd (will have a remainder no matter wat)
	for (var x = 0; x <= 100; x += 2)
	{
		document.write(x + "is an even number <br>");
	}
}

// This function will print numbers between 40 and 60

function fourtyToSixty()
{
	for (var x = 40; x >= 40 && x <=60; x++)
	{
		document.write(x + "<br>")
	}
}

// If you enter '1' - it should print #s between 1 to 11

function enter1()
{
	var num = prompt("Enter the number 1 to print #s from 1 to 11");

	if (num == 1)
	{
		for (var x = 1; x <= 11; x++)
		{
			document.write(x + "<br>");
		}
	}
	else if (num == 2)
	{
		for (var y = 2; y <=12; y++)
		{
			document.write(y + "<br>");
		}
	}

	else if (num == 3)
	{
		for (var z = 3; z <= 13; z++)
		{
			document.write(z + "<br>");
		}
	}

	else if (num == 4)
	{

		for (var g = 4; g <= 14; g++)
		{
			document.write(g + "<br>");
		}
	}

	else if (num == 5)
	{
		for (var i = 5; i <=15; i++)
		{
			document.write(i + "<br>");
		}
	}

	else
	{
		alert("This is not the right number to activate the function");
	}

}

// FUNCTION FOR 123 alerting One Two Three

function loops8()
{
	var val = prompt("Type in any number between 123 and 127");

	switch(val)
	{

		case("123"):
		{
			alert("One Two Three");
			break;
		}

		case("124"):
		{
			alert("One Two Four");
			break;
		}

		default:
		{
			alert("GET OUTTA HERE");
			break;
		}

	}
}


function primeNumbersFromScratch()
{
	var num = prompt("Enter your number here");
	var count = 0;

	for (var x = 1; x <= num; x++)
	{
		for (var y = 1; y <= x; y++)
		{
			if (x % y == 0)
			{
				count++;
			}
		}
		if (count == 2)
		{
			document.write(x + "is a prime number <br>");
		}

		else
		{
			document.write(x + "is not a prime number <br>");
		}

		count = 0;
	}
}

function switchCase()
{
	var day = prompt("Enter the day of the week");
	switch(day)
	{
		case("Monday"):
		{
			alert(day + " we serve pasta");
			break;
		}

		default:
		{
			alert("WE DON'T SERVE SHIT");
			break;
		}
	}
}


