$( document ).ready( function()
{

	$(".box1").keyup( function ()
	{

		var x = $(this).val().length;

		if (x == 3)
		{
			$(this).next().focus();
		}

	});
	

	var i = 0;
	$("#next").click(function ()
	{
		var sources = ["Pic1.jpg", "Pic2.jpg", "Pic3.jpg", "Pic4.jpg", "Pic5.jpg"]
		i++;

		if (i == sources.length)
		{
			i = 0;
		}

		var str = "../IMAGES/" + sources[i];
		$("#myIMG").prop("src", str);8

	});

	

	$("#back").click(function ()
	{
		var sources = ["Pic1.jpg", "Pic2.jpg", "Pic3.jpg", "Pic4.jpg", "Pic5.jpg"]
		i--;

		if (i == sources.length)
		{
			i = 0;
		}

		else if (i < 0)
		{
			i = sources.length
		}

		var str = "../IMAGES/" + sources[i];
		$("#myIMG").prop("src", str);

	});
// FOR  USING THE .EACH METHOD 

	// $("#si").click(function ()
	// {
	// 	$("input[type='checkbox']").each(function ()
	// 	{
	// 		$(this).prop("checked", true);
	// 	})

	// });
// NOW WITH MORE FUNCTIONALITY to doUN SELECT ALL
	$("#si").click(function ()
	{
		var x = $("#mark").html();

		if (x == "Select All")
		{
			$("input[type='checkbox']").each(function ()
			{
				$(this).prop("checked", true);
			});
			$("#mark").html("Un-select All");	
		}

		else if (x == "Un-select All") 
		{
			$("input[type='checkbox']").each(function ()
			{
				$(this).prop("checked", false);
			});
			
			$("#mark").html("Select All");
		}

	});

	$("#mex").click(function ()
	{
		$("#state1").prop("value", "Vera").html("VeraCruz");
	})





}); // END OF DOCUMENT.READY


