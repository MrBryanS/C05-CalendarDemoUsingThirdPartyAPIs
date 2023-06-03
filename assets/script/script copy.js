// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // 1. Create a variable to hold the current hour  in 24-hour time.
$("#currentDay").text(dayjs().format('MM/DD/YYYY'));
console.log(dayjs().format('MM/DD/YYYY'));
console.log("xxxxxx")



// 2. Create a variable to hold a reference to the element with id="currentDay".
$("#currentDay").text(dayjs().format('MM/DD/YYYY'));

//add listener to save button click event
  $(".saveBtn").on("click", function () {
    //get the value of the text area
    var text = $(this).siblings(".description").val();
    //get the id of the time block
    var time = $(this).parent().attr("id");
    //save the text in local storage
    localStorage.setItem(time, text);
//add text "The current hour is: " to the text v
    //console.log(time);


  //need data value from 


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //what is the 'id'?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function showCurrentDate () {
    //Added date element to the header with dayjs
    const dateElement = $('#currentDay');
    const htmlMarkup = document.getElementById('currentDay');
    console.log(htmlMarkup);
    
    console.log(dateElement);
    dateElement.text('The current day is ' + dayjs().format('MM/DD/YYYY'));

    const currHour = dayjs().hour();
    console.log(currHour);
    // on each div need to apply - past present
    $(".time-block").each(
      function () {
        var bartest = $(this).attr("id")
//$(document).ready(function ()

        //if hour is current = present
        //if hour is past = present
        //attribute  .attr()

        
        console.log("xxxxx",bartest)


      }

    )
    
    // if current div < currnHour , add the class 

  };
  showCurrentDate ()
  //target the block hour

});