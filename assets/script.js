var todayEl = $(`#currentDay`);
var moment = moment();

todayEl.text(moment.format(`dddd, MMMM DD, YYYY`));
