$("textarea").keydown(function () {

    var car = $("textarea").val();
    var longitud = car.length;

    if (longitud > 200) {

        $('#caracteres').html('');

        $('#caracteres').append(200-longitud);
        $('#caracteres' ).addClass("text-danger");



    }else if(longitud < 200){

        $('#caracteres').html('');
        $('#caracteres' ).addClass("text-success");

        $('#caracteres').append(longitud);

    }else if(longitud == 200){

        $('#caracteres').html('');
        $('#caracteres' ).addClass("text-success");

        $('#caracteres').append(longitud);
    }

});
$("textarea").keyup(function () {

    var car = $("textarea").val();
    var longitud = car.length;

    if (longitud > 200) {

        $('#caracteres').html('');

        $('#caracteres').append(200-longitud);
        $('#caracteres' ).addClass("text-danger");



    }else if(longitud < 200){

        $('#caracteres').html('');
        $('#caracteres' ).addClass("text-success");

        $('#caracteres').append(longitud);

    }else if(longitud == 200){

        $('#caracteres').html('');
        $('#caracteres' ).addClass("text-success");

        $('#caracteres').append(longitud);
    }

});
