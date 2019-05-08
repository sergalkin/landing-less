var max = 100;
var range = 0;
var newMax = 0;
var ostatokDlyaRange = 0;
var oldOstatok;

$(document).on('input', '.range', function () {
    if (ostatokDlyaRange === 0) {
        range = ($(this).val());
        newMax = max - range;
        ostatokDlyaRange = newMax;

        $('.range').not(this).attr({
            'max': newMax
        });

    } else {
        range = $(this).val();
        oldOstatok = ostatokDlyaRange;
        ostatokDlyaRange = ostatokDlyaRange - range;

        check(this, range);
    }

});
$('.range').change(function () {
    changeSelectedValue(this.id);
});

function changeSelectedValue(elem) {
    elem = "#" + elem;

    var value = $(elem).val();
    $(elem).attr({
        "value": value
    });
    $(elem).parent().attr({
        "data-range-max": value
    });

/*    $(elem).attr({
        'max': range
    })*/


}

function check(vThis, range) {

    $('.range').not(vThis).each(function () {
        var elemValue = parseInt($(this).val());
        var oldSt = parseInt(oldOstatok);
        console.log(oldSt, ostatokDlyaRange, elemValue);
        if (elemValue === 0) {
            $(this).attr({
                "max": ostatokDlyaRange
            });

        }

    });

    $(vThis).attr({
        "max": range
    });

}


