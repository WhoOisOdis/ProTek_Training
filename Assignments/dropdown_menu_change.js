$(document).ready(function ()
{

		var usa = ["San Jose", "Los Angeles", "San Francisco"];
		var mexico = ["VeraCruz", "Mexico City", "Jalisco"];
		var china = ["Beijing", "Hong Kong"];

		$("#country").change(function ()
		{
			var str = "";
			var x = $("#country option:selected").text();

			if (x == "USA")
			{
				for (var i = 0; i < usa.length; i++) 
				{
					str+="<option>" + usa[i] + "</option>";
				}
				$("select[data-type='city']").html(str);
			}

			if (x == "Mexico")
			{
				for (var i = 0; i < mexico.length; i++)
				{	
					str+="<option>" + mexico[i] + "</option>";
				}
				$("select[data-type='city']").html(str);
			}

			if (x == "China")
			{
				for (var i = 0; i < china.length; i++)
				{
					str+="<option>" + china[i] + "</option>";
				}
				$("select[data-type='city']").html(str);
			}


		
		});
	// BELOW THIS LINE IS FOR THE TABLE EXAMPLE
	var students = 
	[
		{
			"fname": "Ravi",
			"lname": "Gill"
		},

		{
			"fname": "George",
			"lname": "Cao"
		},

		{
			"fname": "Jaspal",
			"lname": "Singh"
		}

	];

	$("#myBtn").click(function ()
	{

		$("#myTable tr td:first-child").each(function(i)
		{
			$(this).html(students[i].fname);
			$(this).next().html(students[i].lname);

		});

	});


});