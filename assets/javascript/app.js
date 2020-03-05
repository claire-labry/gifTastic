// Event Listener
$("button").on("click", function(){

// Inital Array of Moods

var moods =  ["Excited", "Calm", "Perplexed", "Mind-Blown", "Livid"];

var mood = $(this).attr("data-mood");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + mood + "xad35A896cDISepiqaz8yXBCdntcOXQ9";

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){
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

             $("#gifs-appear-here").preend(gifDiv)
           }
         }
    });
});
