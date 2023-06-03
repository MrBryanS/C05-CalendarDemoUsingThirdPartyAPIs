// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  const starthour = 9;
  const numberHourBlocksNumber = 9;
  console.log("numberHourBlockstoDisplay is ",numberHourBlocksNumber,"its type is: ",typeof numberHourBlocksNumber);
  const numberHourBlocksString = "9";
  console.log("numberHourBlocksString is ",numberHourBlocksString,"its type is: ",typeof numberHourBlocksString);

  for i=starthour; i <= numberHourBlocksNumber; i++) {console.log(i);
  } 
    





    //convert NumberHourBlocksDisplayed from number to string type
  

  
  
  var currentHour = dayjs().hour();
});