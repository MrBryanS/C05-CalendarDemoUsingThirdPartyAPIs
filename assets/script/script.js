// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  //loop through the time blocks and apply the appropriate class
  //to the time block based on the current time
  //var currentHour = dayjs().hour();
  var currentHour = dayjs().hour();
  var currentHourNumber = parseInt(currentHour);
  console.log(currentHour,typeof currentHour);

  //loop through divs with timeBlock class

  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id");
    var timeBlockNumber = parseInt(timeBlock);
    console.log(timeBlockNumber,typeof timeBlockNumber);

    //If the current hour is less than the time block, add the future class
    if (currentHourNumber < timeBlockNumber) {
      $(this).addClass("future");
    }
    //if the current hour is greater than the time block, add the past class
    else if (currentHourNumber > timeBlockNumber ) {
      $(this).addClass("past");
    }
    //if the current hour is equal to the time block, add the present class
    else if (timeBlockNumber === currentHourNumber) {
       $(this).addClass("present");
    }
    // else if (timeBlockNumber > currentHourNumber) {
    //   $(this).addClass("future");
    // }
  });

  //get the hour from the id



  var activityList = JSON.parse(localStorage.getItem("scheduledEvents")) || [];
  // how do I populate the text area with the text from local storage?
  activityList.forEach(item => {
    //target the time block with the id of the time in the object
    var timeBlock = $("#" + item.time);
    //put the text in the text area
    timeBlock.children(".description").val(item.text);

  });


  //add today's date to the header:
  $("#currentDay").text("Today's date is: " + dayjs().format('MM/DD/YYYY'));
  $("#currentTime").text("Time on last page refresh is:  " + dayjs().format('hh:mm A'));

  //pull the save function out of the click envent
  //Fuction delcaration
  function save() {
    //console.log(this);
    //get the value of the text area
    var text = $(this).siblings(".description").val();
    //console.log(text);
    //get the id of the time block
    var time = $(this).parent().attr("id");

    var timeObject = {
      time: time,
      text: text,
    };
    //console.log(timeObject);

    //save the text to local storage
    if (activityList.find(obj => obj.time == time)) {
      // find the index of the object with the time in my array
      var index = activityList.findIndex(obj => obj.time == time);
      // remove the object from the array, then add the new object
      activityList.splice(index, 1);
    }

    activityList.push(timeObject);

    localStorage.setItem("scheduledEvents", JSON.stringify(activityList));



  }


  //add listener to save button click event
  $(".saveBtn").on("click", save);

  //future feature: add listener to save button keypress event
  // $(".saveBtn").on("keypress", function (e) {
  //   if (e.which == 13) {
  //     save();
  //   }
  // })


});

;
