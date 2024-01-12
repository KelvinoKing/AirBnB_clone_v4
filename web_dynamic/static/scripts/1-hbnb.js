$(document).ready(function () {
  const checkedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name')

    if ($(this).is(':checked')) {
      checkedAmenities[amenityId] = amenityName;
    } else {
      delete checkedAmenities[amenityId];
    }

    updateAmenities();
  });

  function updateAmenities () {
    const amenityNames = Object.values(checkedAmenities);
    console.log(amenityNames);

    $('.amenities h4').text(amenityNames.join(', '));
  }
});
