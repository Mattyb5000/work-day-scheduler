var currentHour = moment().format("HH");
// today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// listen for button click and store textarea value to var text
$('button').click(function () {
    var input = $('textarea').val();
    localStorage.setItem("input", input);
});

// targeting the ID attributes of the textarea elements ("this" element = textarea) 
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