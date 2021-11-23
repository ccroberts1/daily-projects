//VARIABLE DECLARATIONS
var projectFormEl = $("#project-form");
var projectNameEl = $("#project-name");
var projectTypeEl = $("#project-type");
var projectWageEl = $("#project-wage");
var projectDueEl = $("#project-due-date");
var dateTime = $("#dateTime");

$(dateTime).text(moment().format("LLLL"));

//FUNCTION DECLARATIONS
//Retrieves current date-time
function updateTime() {
  dateTime.text(moment().format("LLLL"));
}
//Updates date-time every 30 seconds
setInterval(function () {
  updateTime();
}, 30000);

//EVENT LISTENERS
projectFormEl.submit(function (event) {
  var nameInput = projectNameEl.val();
  event.preventDefault();
  console.log(nameInput);
});

//Psuedo Coding
/*When user presses the submit button, the fields
of the form are printed to the table.
 

1st f - capture input from the 4 fields on the form
2nd f - prints input from 1st f to 2nd, 
accepts 4 args, 1 for each input from 1st f 
 Dynamically create tr, save to variable
 Dynamically create tds
 For days to due date, use Moment to calc difference
 between current date and due date
 For est amount, hr rate * 8, then * days to due date
 Append created tds to tr
 Append tr to tbody
 Close modal at end
*/
