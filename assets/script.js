var todayEl = $(`#currentDay`);
var moment = moment();
var currentHour = moment.hours();
console.log(currentHour);

todayEl.text(moment.format(`dddd, MMMM DD, YYYY`));

function updateHour() {
  $(`.time-block`).each(function () {
    var rowHour = parseInt($(this).attr("id"));
    if (rowHour > currentHour) {
      $(this).addClass(`future`);
    } else if (rowHour == currentHour) {
      $(this).addClass(`present`);
    } else {
      $(this).addClass(`past`);
    }
  });
}

updateHour();
