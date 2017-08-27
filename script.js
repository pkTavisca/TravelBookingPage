$("#flightsButton").click(function() {
    $("#flightsButton").addClass("mainActivated");
    $("#hotelsButton").removeClass("mainActivated");
    $("#flightSelection").css("display", "block");
    $("#hotelSelection").css("display", "none");
});

$("#hotelsButton").click(function() {
    $("#hotelsButton").addClass("mainActivated");
    $("#flightsButton").removeClass("mainActivated");
    $("#flightSelection").css("display", "none");
    $("#hotelSelection").css("display", "block");
});