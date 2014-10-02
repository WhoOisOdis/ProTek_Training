$(document).ready(function ()
{

	$("#copyButton").click(function ()
	{
		var x = $("#input1").val();
		$("#input2").val(x);

	});
// NEW FUNCTION 

	$("#hideBox1").click(function ()
	{
		$("#divBox1").hide();
	});


// NEW FUNCTION

	$("#showBox1").click(function ()
	{
		$("#divBox1").show();
	});


// NEW FUNCTION

	$("#slideBoxUp").click(function ()
	{
		$("#divBox2").slideUp();

	});


// NEW FUNCTION 

	$("#slideBoxDown").click(function ()
	{

		$("#divBox2").slideDown();
	});

// NEW FUNCTION

	$("#input3").keyup(function ()
	{
		var x = $("#input3").val();
		$("#divBox3").html(x);

	});

// NEW FUNCTION
	$("#selectButton").click(function ()
	{
		var x = $("#divBox3").html();
		$("#divBox4").append(x);
	});
// SAMPLE SCRIPT ON VALIDATING EMAIL
// DON'T FORGET YOU NEED DOCUMENT.READY in every
// JQUERY file

	$("#myBtn").click(function()
	{
		var f = $("#fname").val();
		var l= $("#lname").val();

	});


});	

