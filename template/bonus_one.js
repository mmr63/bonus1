// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
	// Magic!
	//console.log('Keepin\'n it clean with an external script!');
	var searches;
	//var length;
	$.getJSON('http://www.mattbowytz.com/simple_api.json?data=all', function(data)
	{
		searches = data.data.interests + data.data.programming;
		console.log(searches);
		//length = searches.length + 1;
		//console.log(length);
	})

	var substring;
	//on key up, if $typedquery is contained in any of the words in $searches print results in typeahead menu
	$("#searchBox").keyup(function( event ) 
	{
  		substring = $('#searchBox').val();
  		//console.log(substring);
  		var str = "";
  		for (var i = 0; i <= searches.length - 1; i++) 
  		{
  			var character = searches[i];
  			if(character != ',')
  			{
  				str += character;
  				console.log(str);
  			}
  			else
  			{
  				if(substring == "")
  				{
  					$('#dropDown').hide();
  					$('#dropDown').empty();
  				}
  				else
  				{
  					if (str.indexOf(substring) >= 0)
  					{
  						$('#dropDown').slideDown('fast');
  						var linker = 
	  					{
	  						permalink_url : "http://www.google.com/search?q=" + str,
	  						title : str
	  					};
	  					$("<a></a>", 
		  				{
		    				href : linker.permalink_url,
		    				html : linker.title
						}).appendTo("#dropDown").after("<br>");
						

  					}
  				}
  				str = "";
  			}
  			/*
  			var str = "";
  			var character = searches[i];
  			var number = str.search(/substring/i);
  			if(substring == '')
  			{
  				$('#dropDown').hide();
  				
  			}
  			else
  			{
  				if(substring != -1)
  				{
	  				$('#dropDown').slideDown('fast');
	  				var linker = 
	  				{
	  					permalink_url : "http://www.google.com/search?q=" + str,
	  					title : str
	  				};
	  				$("<a></a>", 
	  				{
	    				href : linker.permalink_url,
	    				html : linker.title
					}).appendTo("#dropDown");
				}
  			}
  			$('#dropDown').append("<br>");
  			*/
  		}
	});


})();