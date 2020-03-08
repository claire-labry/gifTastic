// Event Listener
$(document).ready (function(){ 
    
    //  $("button[data-mood]").on("click", function(){
    
    // Inital Array of Moods

    
    var moods =  ["Excited", "Calm", "Perplexed", "Mind-Blown", "Livid"];
    
    var mood = $(this).attr("#data-mood");
       
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

                         console.log(moodImage);
                        
                    moodImage.attr("src", results[i].images.fixed_height.url);
                         
                    gifDiv.append(p);
                    gifDiv.append(moodImage);
            
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }
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
    
    
        // var states = $(this).attr("data-state");
    
        // $('<div>').click(function(){
        //     var index = parseInt($(this).attr("data-state"));
        //     var state = states[index];
    
        //     $('<div>').text(state);
        //     if (state === "still"){
        //         $(this).attr("src", $(this).attr("gif-animate"));
        //         $(this).attr("data-state", "animate");
        //     } else{
        //        $(this).attr("src", $(this).attr("gif-still"));
        //        $(this).attr("data-state", "still");
        //     }
        
        // });
    });
    
    
    $('#add-mood').click(function(event) {
        event.preventDefault();
    });
// });