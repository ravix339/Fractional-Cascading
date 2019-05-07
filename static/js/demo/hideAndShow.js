hideSelectsAndRandomButton = () => {
  $("select").hide();
  $("#randomListButton").hide();
};

showSelects = () => {
  $("select").show();
};

showSearchInputAndButtons = () => {
  $("#searchNumber").show();
  $("#startSearchButton").show();
  $("#resetButton").show();
};

hideSearchInputAndButtons = () => {
  $("#searchNumber").hide();
  $("#startSearchButton").hide();
  $("#resetButton").hide();
};
