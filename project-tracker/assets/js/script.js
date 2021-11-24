//VARIABLE DECLARATIONS
var projectFormEl = $("#project-form");
var projectNameEl = $("#project-name");
var projectTypeEl = $("#project-type");
var projectWageEl = $("#project-wage");
var projectDueEl = $("#project-due-date");
var tableBodyEl = $("#table-body");
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
$(projectFormEl).submit(function (event) {
  event.preventDefault();
  var newRow = $("<tr>");
  var nameInput = projectNameEl.val();
  var typeInput = projectTypeEl.val();
  var wageInput = projectWageEl.val();
  var dueInput = projectDueEl.val();
  tableBodyEl.append(newRow);

  function addRows(name, type, wage, due) {
    newRow.append($("<td>").text(name));
    newRow.append($("<td>").text(type));
    newRow.append($("<td>").text(wage));
    newRow.append($("<td>").text(due));
    newRow.append($("<td>").text()); //days = days until due date from Memory.js
    newRow.append($("<td>").text()); //total = (wage*8)*days
  }
  addRows(nameInput, typeInput, wageInput, dueInput);
});
