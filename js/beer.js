$(document).ready(function() {
    $("#beer_search").click(function(){
        $.post("https://www.thebeerspot.com/api/search", 
        { "function" : "beer" , 
        "dev_key" : "DEV_API_KEY" , 
        "search_term" : "darkness",
        "limit" : "5" },  
            function(response) {
                $.each(response, function() {
                    $.each(this, function(name, value) {
                        // add each item to a div on the page
                        $("#display").append(name + " : " + value + "<br />");
                    });
                    // throw a line break at the end of each item
                    $("#display").append("<br />");
                });
                
            });
    })
});

$(function(){
    if($.browser.msie && $.browser.version == '6.0'){
        $('div.dropDown').hide();
    }
    $('div.dropDown').click(function(){
        var ultoshow = $(this).attr('id');
        $('ul#'+ultoshow).toggle();
    });
    $('li.option').click(function(){
        var selectName = $(this).parent('ul.optionList').siblings('div.dropDown').attr('id');
        var value = $(this).attr('id');
        var optTitle = $(this).children('span.optTitle').html();    
        var iconClass = optTitle.toLowerCase();

        $(this).parent('ul.optionList').siblings('div.dropDown').children('span.icon').children('img#sprite').attr('class',iconClass);
        $(this).parent('ul.optionList').siblings('div.dropDown').children('span.dropHeader').html(optTitle);
        $('input#'+selectName).attr('value',value); 
        document.search.submit();
    });
});