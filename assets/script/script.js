// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  //add today's date to the header:
  $("#currentDay").text("Today's date is: " + dayjs().format('MM/DD/YYYY'));


  //Estabilish the array of hours to be displayed
  const theHoursDisplay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
  const theHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17 "]
  const totalHours = theHours.length
  
  //this is the current hour which is the present style
  var currentHour = (dayjs().format('hA'))
  console.log("currentHour is ", currentHour, "It's type is: ", typeof currentHour);


 //add a button to save the text in the 09AM text area to local storage
 $('#09AMbutton').on('click', function () {
  alert('Hello!');
  var text = $('#09AM'.).val();


  
  localStorage.setItem('09AM',"text");
});



  //if the currentHour is less 09 then all are future
  //if the currentHour is 09 then 09 is present and the rest are future
  //if the currentHour is greter then all before currentHour are past, the currentHour is present and the rest are future

  
  //~~loop through theHours array and create the divs for each hour

    
  









// create a local storage variable for one of the hours:
  
  
  //to clear the loccal storage value in the text area: 
 // localStorage.setItem(theHoursDisplay[0], "");

  //to add text to the local storage value:
  localStorage.setItem(theHoursDisplay[0], "some text");

 

    //localStorage.setItem(theHoursDisplay[0], "some text");
    




    


//~~


  //document.getElementById('btn saveBtn col-2 col-md-1').addEventListener('click', saveEvent);
  //document.getElementById('hour-9').addEventListener('click', console.log("clicked"));





//~~





}); //end of document.ready function



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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



  //BELOW THE LINE:

  // // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // // the code isn't run until the browser has finished rendering all the elements
  // // in the html.
  // $(document).ready(function () {
  






  