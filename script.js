//Flights
var flightsButton = $('#flightsButton');
var hotelsButton = $('#hotelsButton');
var flightForm = $('#flightForm');
var hotelForm = $('#hotelForm');
var oneWay = $('#oneWay');
var twoWay = $('#twoWay');

flightsButton.addClass('mainActivated');
flightsButton.click(function () {
    flightsButton.addClass('mainActivated');
    hotelsButton.removeClass('mainActivated');
    flightForm.show();
    hotelForm.hide();
});

hotelsButton.click(function () {
    hotelsButton.addClass('mainActivated');
    flightsButton.removeClass('mainActivated');
    flightForm.hide();
    hotelForm.show();
});

oneWay.addClass('flightTypeActivated');
$('#flight-returning').hide();
oneWay.click(function () {
    oneWay.addClass('flightTypeActivated');
    twoWay.removeClass('flightTypeActivated');
    oneWay.parent().closest('div').children('input').val('oneWay');
    $('#flight-returning').hide();
});
twoWay.click(function () {
    twoWay.addClass('flightTypeActivated');
    oneWay.removeClass('flightTypeActivated');
    twoWay.parent().closest('div').children('input').val('twoWay');
    $('#flight-returning').show();
});

var airports = ['Pune', 'Mumbai'];
$('.flightAutoselect').autocomplete({
    source: airports
});

$('.date').datepicker();

$('#noOfChildren').change(function (event) {
    var val = parseInt(event.target.value);
    $('#children-list').empty();
    for (var i = 0; i < val; i++) {
        var $div = $('<div></div>');
        $('#children-list').append($div);
        $div.append($('<div class="kid">Child ' + (i + 1) + ' age:</div>'));
        var $select = $('<select>', {
            name: "child" + (i + 1)
        });
        $div.append($select);
        $select.append($('<option value="NA">Age</option>'));
        $select.append($('<option value="<1">Below 1 year</option>'));
        for (var j = 0; j < 17; j++) {
            $select.append($('<option value=' + (j + 1) + '>' + (j + 1) + '</option>'));
        }
    }
});

//Hotels
