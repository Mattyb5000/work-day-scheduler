// set current time in military time to reference in conditional statement
var currentHour = moment().format("HH");
// today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));




// listen for button click and store textarea value to var text
$('button').click(function () {
    var text = $('textarea').val();
    // value stores in "text"
    console.log(text)
    // still working on setting this to work for all hours and not just 9AM
    localStorage.setItem("hour", text);
});




$("button").each(function (index) {
    console.log(index + ": " + $(this).text());
});

$("textarea").each(function () {
    var hourId = $(this).attr("id");
    if (hourId < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present", "future");
        console.log("past");
    } else if (hourId === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past", "future");
        console.log("present");
    } else if (hourId >= currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past", "present");
    }
});