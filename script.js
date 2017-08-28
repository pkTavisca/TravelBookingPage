$("#flightsButton").click(function () {
    $("#flightsButton").addClass("mainActivated");
    $("#hotelsButton").removeClass("mainActivated");
    $("#flightForm").css("display", "block");
    $("#hotelSelection").css("display", "none");
});

$("#hotelsButton").click(function () {
    $("#hotelsButton").addClass("mainActivated");
    $("#flightsButton").removeClass("mainActivated");
    $("#flightForm").css("display", "none");
    $("#hotelSelection").css("display", "block");
});

$("#oneWay").addClass("flightTypeActivated");
$('#flight-returning').hide();
$("#oneWay").click(function () {
    $("#oneWay").addClass("flightTypeActivated");
    $("#twoWay").removeClass("flightTypeActivated");
    $('#oneWay').parent().closest('div').children('input').val('oneWay');
    $('#flight-returning').hide();
});
$("#twoWay").click(function () {
    $("#twoWay").addClass("flightTypeActivated");
    $("#oneWay").removeClass("flightTypeActivated");
    $('#twoWay').parent().closest('div').children('input').val('twoWay');
    $('#flight-returning').show();
});

var airports = ['Pune', 'Mumbai'];
$('.flightAutoselect').autocomplete({
    source: airports
});

$(".date").datepicker();
$('.spinner').spinner();
