(function($) {

  function mailchimpCallback(error, response) {
  	if (!error) {
  		$('h6.success').html('<i class="pe-7s-check"></i>' + response).fadeIn(1000);
  		$('h6.error').fadeOut(500);
  	}
  	else {
  		$('h6.error').html('<i class="pe-7s-close-circle"></i>' + response).fadeIn(1000);
  	}
  }

  $("#mailchimp").submit(function(e) {
    e.preventDefault();

    var driver = $('#driver').is(":checked");
    var data = $('#mailchimp').serializeArray();

    $.ajax({
        method: 'POST',
        url: 'https://gozova-temp-backend.herokuapp.com/email/subscribe',
        data: {
          email: data[1].value,
          name: data[0].value,
          driver: driver
        },
        success: function (data) {
           mailchimpCallback(false, 'Welcome to Gozova! We\'ll keep you notified.');
        },
        error: function(data) {
          mailchimpCallback(true, data.responseJSON.error);
        }
    });
  });
})(jQuery);
