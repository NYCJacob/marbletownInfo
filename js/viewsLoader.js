$(document).ready(function () {
    // $("#census").load("views/censusData.html");
    $("#tboard").load("views/townBoard.html");
    $("#events").load("views/eventsLaw.html");
    $("#petition").load("views/petition.html");

    // reload embedded iframes
    $("#census-tab").on("click", function () {
        setTimeout(function () {
            console.log("time out");
            $('#cr-embed-06000US3611145458-demographics-age-distribution_by_decade-total').attr('src', function(i, val) {return val;});
            $('#cr-embed-06000US3611145458-demographics-age-distribution_by_decade-total').attr('src', function(i, val) {return val;});
            $('#cr-embed-06000US3611145458-demographics-age-distribution_by_category').attr('src', function(i, val) {return val;});
            $('#cr-embed-06000US3611145458-demographics-sex').attr('src', function(i, val) {return val;});
            $('#ccr-embed-06000US3611145458-demographics-race').attr('src', function(i, val) {return val;});
            $('#cr-embed-06000US3611145458-economics-income-household_distribution').attr('src', function(i, val) {return val;});
        }, 2000);
    });

    // bootstrap popover init
    $('[data-toggle="popover"]').popover({trigger: 'hover'});

});
