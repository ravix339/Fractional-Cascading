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
  $("#animationSpeed").show();
  $("#animationSpeedLabel").show();
};

hideSearchInputAndButtons = () => {
  $("#searchNumber").hide();
  $("#startSearchButton").hide();
  $("#resetButton").hide();
  $("#newRandomListBtn").hide();
  $("#animationSpeed").hide();
  $("#animationSpeedLabel").hide();
};
