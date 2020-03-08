// Event Listener
$("div.container").on("click", "button[data-mood]", function(){
// this will now work because the div with a class of container will always exist. Anyway I'm going to collapse now lol

// $("button[data-mood]").on("click", function(){
// one last thing (before my laptop dies). This listener will NOT work for buttons that haven't been created at page load. The reason is listeners only get attached once. The way we fix this is by targetting a parent element of the elements we want to target, and then delegating to the elements we want to click (since the parent element will be expected to always exist on the page). So the way we fix it is by keeping the selector we have here, but moving it
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
     $("#gifs-appear-here").empty();   


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

    moodImage.attr("src", results[i].images.fixed_height_still.url);
    moodImage.attr({"data-animate": results[i].images.fixed_height.url});
    moodImage.attr({"data-state": "still"});
    moodImage.attr({"data-still": results[i].images.fixed_height_still.url});


    var states = $(this).attr("data-state");

    $('<div>').click(function(){
        var index = parseInt($(this).attr("data-state"));
        var state = states[index];

        $('<div>').text(state);
        if (state === "still"){
            $(this).attr("src", $(this).attr("gif-animate"));
            $(this).attr("data-state", "animate");
        } else{
           $(this).attr("src", $(this).attr("gif-still"));
           $(this).attr("data-state", "still");
        }
    
    });
});


$('#add-mood').click(function(event) {
    event.preventDefault();
    // this stops the page from reloading (because you are using a button of type submit)
});
});