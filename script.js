$(function () {
    $('#ModernizationResult').hide();

    $('#field1').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input1').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            //console.log('onSlide');
            //console.log('position: ' + position, 'value: ' + value);
            $('.content #input1').val(value);
        },
        onSlideEnd: function (position, value) {
            //console.log('onSlideEnd');
            //console.log('position: ' + position, 'value: ' + value);
        }
    });
    // Change the value of input field when slider changes
    $('#field1').on('input', function () {
        $('#input1').val(this.value);
        console.log('$' + $('#input1').val());
    });

    // Change the value of slider field when input changes
    $('#input1').on('input', function () {
        if (this.value.length == 0) $('#field1').val(0).change();

        $('#field1').val(this.value).change();
    });


    $('#field2').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input2').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            $('.content #input2').val(value);
        },
        onSlideEnd: function (position, value) {
        }
    });
    // Change the value of input field when slider changes
    $('#field2').on('input', function () {
        $('#input2').val(this.value);
        console.log('$' + $('#input2').val());
    });
    // Change the value of slider field when input changes
    $('#input2').on('input', function () {
        if (this.value.length == 0) $('#field2').val(0).change();

        $('#field2').val(this.value).change();
    });




    $('#field3').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input3').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            $('.content #input3').val(value);
        },
        onSlideEnd: function (position, value) {
        }
    });
    // Change the value of input field when slider changes
    $('#field3').on('input', function () {
        $('#input3').val(this.value);
        console.log('$' + $('#input3').val());
    });
    // Change the value of slider field when input changes
    $('#input3').on('input', function () {
        if (this.value.length == 0) $('#field3').val(0).change();

        $('#field3').val(this.value).change();
    });



    $('#field4').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input4').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            $('.content #input4').val(value);
        },
        onSlideEnd: function (position, value) {
        }
    });
    // Change the value of input field when slider changes
    $('#field4').on('input', function () {
        $('#input4').val(this.value);
        console.log('$' + $('#input4').val());
    });
    // Change the value of slider field when input changes
    $('#input4').on('input', function () {
        if (this.value.length == 0) $('#field4').val(0).change();

        $('#field4').val(this.value).change();
    });


    $('#field5').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input5').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            $('.content #input5').val(value);
        },
        onSlideEnd: function (position, value) {
        }
    });
    // Change the value of input field when slider changes
    $('#field5').on('input', function () {
        $('#input5').val(this.value);
        console.log('$' + $('#input5').val());
    });
    // Change the value of slider field when input changes
    $('#input5').on('input', function () {
        if (this.value.length == 0) $('#field5').val(0).change();

        $('#field5').val(this.value).change();
    });

    $('#field6').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input6').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            $('.content #input6').val(value);
        },
        onSlideEnd: function (position, value) {
        }
    });
    // Change the value of input field when slider changes
    $('#field6').on('input', function () {
        $('#input6').val(this.value);
        console.log('$' + $('#input6').val());
    });
    // Change the value of slider field when input changes
    $('#input6').on('input', function () {
        if (this.value.length == 0) $('#field6').val(0).change();

        $('#field6').val(this.value).change();
    });


    $('#field7').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input7').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            $('.content #input7').val(value);
        },
        onSlideEnd: function (position, value) {
        }
    });
    // Change the value of input field when slider changes
    $('#field7').on('input', function () {
        $('#input7').val(this.value);
        console.log('$' + $('#input7').val());
    });
    // Change the value of slider field when input changes
    $('#input7').on('input', function () {
        if (this.value.length == 0) $('#field7').val(0).change();

        $('#field7').val(this.value).change();
    });


    $('#field8').rangeslider({
        polyfill: false,
        onInit: function () {

            $('#input8').val($('input[type="range"]').val());
        },
        onSlide: function (position, value) {
            $('.content #input8').val(value);
        },
        onSlideEnd: function (position, value) {
        }
    });
    // Change the value of input field when slider changes
    $('#field8').on('input', function () {
        $('#input8').val(this.value);
        console.log('$' + $('#input8').val());
    });
    // Change the value of slider field when input changes
    $('#input8').on('input', function () {
        if (this.value.length == 0) $('#field8').val(0).change();

        $('#field8').val(this.value).change();
    });

});


function ModernizationScoreCalculator(form) {
    $("#ModernizationResult").slideDown();
    $('html, body').animate({ scrollTop: ($('#ModernizationResult').offset().top) }, 300);

    const revenueWeight = 0.20;
    const efficiencyWeight = 0.20;
    const consolidationWeight = 0.10;
    const functionalRelevanceWeight = 0.10;
    const additionalFeaturesWeight = 0.05;
    const changeManagementWeight = 0.05;
    const targetUserWeight = 0.10;
    const uxWeight = 0.20;


    score = parseFloat($('#field1').val()) * revenueWeight +
        parseFloat($('#field2').val()) * efficiencyWeight +
        parseFloat($('#field3').val()) * consolidationWeight +
        parseFloat($('#field4').val()) * functionalRelevanceWeight +
        parseFloat($('#field5').val()) * additionalFeaturesWeight +
        // parseFloat($('#field6').val()) * changeManagementWeight +
        parseFloat($('#field7').val()) * targetUserWeight +
        parseFloat($('#field8').val()) * uxWeight;


    changeManagement = parseFloat($('#field6').val()) * changeManagementWeight;
    if (changeManagement < 0.25 && changeManagement >= 0.15) {
        score = score + changeManagement * 2;

    } else if (changeManagement < 0.15) {
        changeManagement = changeManagement * 2.5;
        score = score + changeManagement;

    } else if (changeManagement >= 0.25) {
        score = score - changeManagement;
    }

    totalScore = score;

    if (totalScore > 4.5) {
        decision = " Modernize";
    } else if (totalScore <= 4.5 && totalScore >= 4) {
        decision = "Think more!";
    } else {
        decision = " not Modernize";

    }

    $('#total').text("" + totalScore.toLocaleString());

    $('#modernization_statement').text(" " + decision.toLocaleString());
}