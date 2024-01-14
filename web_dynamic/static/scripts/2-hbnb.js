// static/scripts/2-hbnb.js
$(document).ready(function () {
  // check status
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    method: 'GET',
    success: function (response) {
      if (response.status === 'OK') {
        // If the status is "OK", add the class "available" to the div#api_status
        $('#api_status').addClass('available');
      } else {
        // Otherwise, remove the class "available" from the div#api_status
        $('#api_status').removeClass('available');
      }
    }
  });

  const checkedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      checkedAmenities[amenityId] = amenityName;
    } else {
      delete checkedAmenities[amenityId];
    }

    updateAmenities();
  });

  function updateAmenities () {
    const amenityNames = Object.values(checkedAmenities);
    $('.amenities h4').text(amenityNames.join(', '));
  }
});
