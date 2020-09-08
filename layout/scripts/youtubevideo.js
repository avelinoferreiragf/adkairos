var htmlString = "";
var apiKey = 'AIzaSyDDBk8tAkod1VRRNyFZF09fgQyMpnSe5HI'; //https://console.developers.google.com
var channelID = 'UCygLWm0hpaG0QJ5n0Udi1kQ';
var maxResults = 999;

$.getJSON('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + '&part=snippet,id&order=date&maxResults=' + (maxResults > 1 ? 1 : maxResults), function(data) {
    $.each(data.items, function(i, item) {
        var videoID = item['id']['videoId'];
        var title = item['snippet']['title'];
        var videoEmbed = "https://www.youtube.com/embed/" + videoID;
        htmlString += '<div class="video"><h2>' + title + '</h2><br><a href="' + videoEmbed + '"><img src="http://img.youtube.com/vi/' + videoID + '/0.jpg"></a></div>';
    });
    $('.video').html(htmlString);
});