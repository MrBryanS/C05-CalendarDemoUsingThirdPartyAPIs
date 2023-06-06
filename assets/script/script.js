// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  //add today's date to the header:
  $("#currentDay").text("Today's date is: " + dayjs().format('MM/DD/YYYY'));

  //add listener to save button click event
  $(".saveBtn").on("click", function () {
    //get the value of the text area
    var text = $(this).siblings(".description").val();
    //get the id of the time block
    var time = $(this).parent().attr("id");
  });



});
