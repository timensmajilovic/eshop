$(function() {

    var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $.getJSON(flickrApiUrl, {
        tags: "odlodlshighdfhgodf1",
        tagmode: "any",
        format: "json"
    }).done(function(data) {
        $.each(data.items, function(index, item) {
        

            if(index == 0) {
                active = "active";
            }
            else {
                active = "";
            }

            var html = '<div class="carousel-item  ' + active + '">';
            html += '<img class="d-block w-100" src="' + item.media.m + '" alt="First slide">';
            html += '</div>';

            $(html).appendTo("#flickr");


            
            
        });
    }).fail(function() {
        alert("Ajax call failed");
    });
});