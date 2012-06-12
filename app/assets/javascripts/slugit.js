$(document).ready(function(){

  $('#slugit_btn')
    .bind("ajax:before", function(evt, data, status, xhr){
        var slug_input = $('#input-slug')[0];
        $('<input />').attr('type', 'hidden').attr('name', slug_input.name).attr('value', slug_input.value).appendTo($(this));
    })
    .bind("ajax:success", function(evt, data, status, xhr){
	var slug = $.parseJSON(xhr.responseText);

       if (slug && slug["out"]) $('#result>h2').html(slug["out"]);

    })
    .bind("ajax:error", function(evt, xhr, status, error){
      // add more robust error handling
      $('#errors').html("Failed to generate slug");
    });

});


