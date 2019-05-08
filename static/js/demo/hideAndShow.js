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
  $("#newRandomListBtn").show();
};

hideSearchInputAndButtons = () => {
  $("#searchNumber").hide();
  $("#startSearchButton").hide();
  $("#resetButton").hide();
  $("#newRandomListBtn").hide();
};
