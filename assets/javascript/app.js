// Event Listener
$("button").on("click", function(){

// Inital Array of Moods

var moods =  ["Excited", "Calm", "Perplexed", "Mind-Blown", "Livid"];

var mood = $(this).attr("data-mood");

var queryURL = "https://api.giphy.com/v1/stickers/search?api_key=xad35A896cDISepiqaz8yXBCdntcOXQ9&q="+ mood + "&limit=25&offset=0&rating=G&lang=en&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){
    console.log(response);
     var results = response.data;

     for (var i = 0; i < results.length; i++){
         if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
             var gifDiv = $("<div>");
             var rating = results[i].rating;
             var p = $("<p>").text("Rating: " + rating);
             var moodImage = $("<img>");

             moodImage.attr("src", results[i].images.fixed_height.url);

             gifDiv.append(p);
             gifDiv.append(moodImage);

             $("#gifs-appear-here").prepend(gifDiv)
           }
         }
    });
});
