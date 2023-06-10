// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
//check the time and color code the time blocks
 



//loop through the time blocks and apply the appropriate class
//to the time block based on the current time
var currentHour = dayjs().hour();
var currentHourText = currentHour.toString();
console.log(currentHourText, typeof currentHourText);
//var isCurrentHour = false;
//var isPastHour = false;
//var isFutureHour = false;
//if ("15"==="15") {var isCurrentHour = true };
//console.log(isCurrentHour, typeof isCurrentHour);




$(".time-block").each(function () {
  var timeBlock = $(this).attr("id");
  console.log(timeBlock,typeof timeBlock);

  if (timeBlock < currentHourText) {
    console.log("past");
    $(this).addClass("past");
  }
  else if (timeBlock === currentHourText) {
    console.log("present");

    $(this).addClass("present");
  }
  else if (timeBlock > currentHourtText){
    console.log("future");
    $(this).addClass("future");
  }
});

  //get the hour from the id
  


  var activityList = JSON.parse(localStorage.getItem("scheduledEvents")) || [];
  // how do I populate the text area with the text from local storage?
  activityList.forEach(item => {
    //console.log(item.time);
    //target the time block with the id of the time in the object
    var timeBlock = $("#" + item.time);
    //put the text in the text area
    timeBlock.children(".description").val(item.text);
        
    });


  //add today's date to the header:
  $("#currentDay").text("Today's date is: " + dayjs().format('MM/DD/YYYY'));

  //add listener to save button click event
  $(".saveBtn").on("click", function (e) {
    console.log(this);
    //get the value of the text area
    var text = $(this).siblings(".description").val();
    console.log(text);
    //get the id of the time block
    var time = $(this).parent().attr("id");

    var timeObject = {
      time: time,
      text: text,
    };

    //save the text to local storage
    if (activityList.find(obj => obj.time == time)) {
      // find the index of the object with the time in my array
      var index = activityList.findIndex(obj => obj.time == time);
      // remove the object from the array, then add the new object
      activityList.splice(index, 1);
    }

    activityList.push(timeObject);

    localStorage.setItem("scheduledEvents", JSON.stringify(activityList));
  });

});

;
