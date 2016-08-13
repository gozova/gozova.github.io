(function($) {

  function mailchimpCallback(resp) {
  	if (resp.result === 'success') {
  		$('h6.success').html('<i class="pe-7s-check"></i>' + resp.msg).fadeIn(1000);
  		$('h6.error').fadeOut(500);
  	}
  	else if (resp.result === 'error') {
  		$('h6.error').html('<i class="pe-7s-close-circle"></i>' + resp.msg).fadeIn(1000);
  	}
  }

  $("#mailchimp").submit(function(e) {
    e.preventDefault();

    var driver = $('#driver').is(":checked");
    var id = driver ? "a952eecaf3" : "db31656b2f";

    $.ajax({
        url: 'http://gozova.us11.list-manage.com/subscribe/post-json?u=8b9f5723a7f96e71fbc93dded&c=?&id=' + id,
        data: $('#mailchimp').serialize(),
        dataType: 'jsonp',
        success: function (data) {
           mailchimpCallback(data);
        }
    });
  });
})(jQuery);
