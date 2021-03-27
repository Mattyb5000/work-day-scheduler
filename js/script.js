// var 
var currentHour = moment().format("HH");

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));




// forloop
$('button').click(function() {
    var text = $('textarea').val();
    console.log(text)
    localStorage.setItem("9AM", text);
    //send to server and process response
});


// this could help if I can figure out how to put a click in here according to Greg

// $("button").each(function( index ) {
//     console.log( index + ": " + $( this ).text() );
//   });

  $("textarea").each(function() {
      var hourId = $(this).attr("id")
    console.log(hourId);
    if(hourId < currentHour){
        console.log("past");
        textarea.attr("style", 

     
    };

  });
  console.log(currentHour)