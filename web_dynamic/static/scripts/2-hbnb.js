// static/scripts/2-hbnb.js

document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript logic

    // New logic as specified in the instructions
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
});
