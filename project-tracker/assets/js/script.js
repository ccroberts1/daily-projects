//VARIABLE DECLARATIONS
var dateTime = $("#dateTime");

$(dateTime).text(moment().format("LLLL"));

//FUNCTION DECLARATIONS
function updateTime() {
  dateTime.text(moment().format("LLLL"));
}

setInterval(function () {
  updateTime();
}, 30000);

//EVENT LISTENERS
