// Event Listener
$(document).ready (function(){ 
    
    //  $("button[data-mood]").on("click", function(){
    
    // Inital Array of Moods

    
    var moods =  ["Excited", "Calm", "Perplexed", "Mind-Blown", "Livid"];
    
    
    $(document).on('click', '.mood', function(){
        
        var mood = $(this).attr("data-name");
       
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + mood + "&api_key=xad35A896cDISepiqaz8yXBCdntcOXQ9&limit=10"
        console.log(mood);
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
            .then(function(response){
                console.log(response);
                 
                var results = response.data;
                    $("#gifs-appear-here").empty(); 
                    console.log(results)  
            
                 for (var i = 0; i < results.length; i++){
                     if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
                         var gifDiv = $("<div>");
                         var rating = results[i].rating;
                         var p = $("<p>").text("Rating: " + rating);
                         var moodImage = $("<img>");
                
                         moodImage.attr("data-still", results[i].images.fixed_height_still.url);
                         moodImage.attr("data-animate", results[i].images.fixed_height.url);
                         moodImage.attr('data-state', 'still');
                         moodImage.addClass ('animate-gif');
               
                         console.log(moodImage);
                         console.log(results.length);
                        
                    moodImage.attr("src", results[i].images.fixed_height.url);
                         
                    gifDiv.append(p);
                    gifDiv.append(moodImage);
            
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }
        });
});
            function renderButtons() {
                $("#mood-view").empty();
        
                for (var i = 0; i < moods.length; i++) {
                  var a = $("<button>");
                  a.addClass("mood");
                  a.attr("data-name", moods[i]);
                  a.text(moods[i]);
                  $("#mood-view").append(a);
                }
              }
              $("#add-mood").on("click", function(event) {
                event.preventDefault();
                var mood = $("#mood-input").val().trim();
                moods.push(mood);
                renderButtons();
              });
        
              renderButtons();
    
    
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
    });
// });