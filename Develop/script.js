$(document).ready(function () {
var saveBtn = $("saveBtn");
var day = dayjs().format("dddd, MMM D, YYYY UTC");
$("#time").text(day);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  function timeTracker() {
    // get current number of hours
    var currentTime = dayjs().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var apptTime = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (currentTime < apptTime) {
        $(this).addClass("future");
      } else if (currentTime === apptTime) {
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  }
  timeTracker();
 setInterval(timeTracker, 15000);



// $(this).ready(function addAppointment() {
//   var appt = getElementByClass("description");
//   appt.textContent()
//     // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.

// }
// )


saveBtn.on("click", function () {
  var value = $(".description").val();
  var apptTime = $(this).parent().attr("id");
  localStorage.setItem(apptTime, value)
console.log(value, apptTime);
});

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));

});
// get lo