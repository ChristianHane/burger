$(document).ready(() => {
  $('.devour').click(function() {
    console.log('here');
    $.ajax("/api/burgers/" + $(this).attr('data-id'), {
      type: "PATCH",
    }).then(response => {
        location.reload();
      }
    );
  })

  $('#add-burger').click(function(event) {
    event.preventDefault();
    if($('#burger').val()) {
      $('.empty-field').hide();
      $.post('/api/burgers/', {name: $('#burger').val()})
      .then(response => {
        location.reload();
      })
    } else {
      $('.empty-field').show();
    }
  })
})