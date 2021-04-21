$(document).ready( function () {

} );

function displayMessage(response)
{
    if($('#uploader_div').css('display') != 'none')
        $('#uploader_div').hide('slow');
    var message = $('<div class="alert alert-error error-message" style="display: none;">');
    var close = $('<button type="button" class="close" data-dismiss="alert">&times</button>');
    message.append(close); // adding the close button to the message
    message.append(response);
    message.appendTo($('body')).fadeIn(300);
}



function searchByDate()
{
    let date = $("#search_date_date").val().toString();
    let newDate = convertDateToNumeric(date);

    $.ajax({
        method : "GET",
        url : "https://wt78.fei.stuba.sk/zadanie6/api/search/date/" + newDate,
        dataType : "json",
        timeout : 100000,
        success : function(data) {
            json = data.namedays;
            let rawStr = "";
            for(var k in json)
                rawStr += "Krajina: " + countries[json[k].country] + " , meno: " + json[k].name + "<br>";

            displayMessage(rawStr)
        },
        error : function(e) {
            displayMessage("Nepodarilo sa nájsť...")
        }
    });
}
