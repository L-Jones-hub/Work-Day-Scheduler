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

$(`.saveButton`).on(`click`, function () {
  var value = $(this).siblings(`.description`).val();
  var time = $(this).parent().attr(`id`);
  localStorage.setItem(time, value);
});

$(`.time-block`).each(function () {
  var number = $(this).attr(`id`);
  var tasks = localStorage.getItem(number);
  var taskDescription = $(this).children(`.description`);

  if (tasks != null) {
    taskDescription.val(tasks);
  }
});
