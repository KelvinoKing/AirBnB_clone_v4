// static/scripts/2-hbnb.js
document.addEventListener('DOMContentLoaded', function () {
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

    // filter amenities
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

    function updateAmenities() {
        const amenityNames = Object.values(checkedAmenities);
        $('.amenities h4').text(amenityNames.join(', '));
    }

    function place_search() {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: Object.keys(checkedAmenities) }),
            success: function (response) {
                $('.places').empty();

                response.forEach(function (place) {
                    const article = `<article>
                        <div class="title_box">
                            <h2>${place.name}</h2>
                            <div class="price_by_night">$${place.price_by_night}</div>
                        </div>
                        <div class="information">
                            <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                            <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
                        </div>
                        <div class="description">${place.description}</div>
                    </article>`;

                    $('.places').append(article);
                });
            }
        });
    }
    // Handle button click to trigger the new search
    $('button[type="button"]').click(function () {
        place_search();
    });

    // populate places
    place_search();
});