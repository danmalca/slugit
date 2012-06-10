$(document).ready(function(){

  $('#slugit_form')
    .bind("ajax:success", function(evt, data, status, xhr){
	var slug = $.parseJSON(xhr.responseText);

      $('#result>h3').html(slug["out"]);

    })
    .bind("ajax:error", function(evt, xhr, status, error){
      // add more robust error handling
      $('#errors').html("Failed to generate slug");
    });

});


