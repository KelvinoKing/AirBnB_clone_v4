// static/scripts/2-hbnb.js
document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript logic

    // New logic as specified in the instructions
    place_search();
});

function place_search() {
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        method: 'POST',
        contentType: 'application/json',
        data: '{}',
        success: function (response) {
            $('.places').empty();

            response.forEach(function (places) {
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
