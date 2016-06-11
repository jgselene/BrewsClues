$(document).ready(function() {
    $.getJSON("http://api.brewerydb.com/v2/?key=ed05c35d525c392e64ef73a314c381ac&format=json",
        function(data){
          console.log(JSON.stringify(data));
    });
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