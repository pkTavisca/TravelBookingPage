$("#flightsButton").click(function () {
    $("#flightsButton").addClass("mainActivated");
    $("#hotelsButton").removeClass("mainActivated");
    $("#flightSelection").css("display", "block");
    $("#hotelSelection").css("display", "none");
});

$("#hotelsButton").click(function () {
    $("#hotelsButton").addClass("mainActivated");
    $("#flightsButton").removeClass("mainActivated");
    $("#flightSelection").css("display", "none");
    $("#hotelSelection").css("display", "block");
});

$("#oneWay").addClass("flightTypeActivated");
$("#oneWay").click(function () {
    $("#oneWay").addClass("flightTypeActivated");
    $("#twoWay").removeClass("flightTypeActivated");
    $('#oneWay').parent().closest('div').children('input').val('oneWay');
});
$("#twoWay").click(function () {
    $("#twoWay").addClass("flightTypeActivated");
    $("#oneWay").removeClass("flightTypeActivated");
    $('#twoWay').parent().closest('div').children('input').val('twoWay');
});
