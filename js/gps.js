function requestLastGPSLocation() {
    console.log("Refresh Location")
    $.get({
        url: 'https://k2j1e9ygt0.execute-api.us-west-1.amazonaws.com/prod/getlocation',
        success: completeRequest,
    })
}

function completeRequest(result) {
    console.log('Response received from API: ', result);
    $("#latitude").text(result.Latitude)
    $("#longitude").text(result.Longitude)
    $("#pixie_id").text(result.PixieBoardID)
    $("#gps_saved_time").text(result.RequestTime)
}

    // Register click handler for #request button
function onDocReady() {
    $('#request').click(handleRequestClick);
}

function handleRequestClick(event) {
    requestLastGPSLocation();
}


$(document).ready(function() {
    onDocReady();
});