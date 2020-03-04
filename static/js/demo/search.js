$(document).ready(function() {
  $("#startSearchButton").on("click", handleSearchButtonClick);
  $("#resetButton").on("click", resetScreen);
  $("#animationSpeed").on("change", handleSpeedChange);
});
let speed = 1050;
let pause = null;

handleSearchButtonClick = () => {
  if (pause == null) {
    const searchNumber = $("#searchNumber").val();
    if (searchNumber) startSearch(searchNumber);
    pause = false;
    $("#startSearchButton").html("Pause Search");
  } else if (!pause) {
    pause = true;
    $("#startSearchButton").html("Start Search");
  } else {
    pause = false;
    $("#startSearchButton").html("Pause Search");
  }
};

handleSpeedChange = () => {
  speed = 2100 - $("#animationSpeed").val();
};

startSearch = async searchNumber => {
  $(`.list-element`).css("background-color", "white");
  //setup list of lists for search
  let listOfLists = sessionStorage.getItem("listOfLists");
  listOfLists = JSON.parse(listOfLists).reverse();
  const numLists = listOfLists.length;

  //get info from search
  let searchData = new Search();
  searchData.driver(listOfLists, Number(searchNumber));
  const { hits, results } = searchData;
  console.log(hits);
  console.log(results);
  console.log(hits);

  //disable and start search button
  $("#searchNumber").prop("disabled", true);
  $("#resetButton").prop("disabled", true);
  $("#newRandomListBtn").prop("disabled", true);

  i = 0;
  //start search amimation using hits data
  while (i != hits.length) {
    while (i < hits.length && !pause) {
      const hit = hits[i];
      let { list, index, found } = hit;
      list = numLists - list - 1;
      $(`#fc-list-${list}-element-${index}`).addClass("animate");
      await sleep(speed);
      $(`#fc-list-${list}-element-${index}`).removeClass("animate");
      if (found)
        $(`#fc-list-${list}-element-${index}`).css(
          "background-color",
          "rgba(250, 255, 130, 0.8)"
        );
      else {
        $(`#fc-list-${list}-element-${index}`).css(
          "background-color",
          "rgba(239, 204, 255, 0.5)"
        );
      }
      await sleep(speed);
      ++i;
    }
    await sleep(50);
  }
  $("#startSearchButton").prop("disabled", false);
  $("#searchNumber").prop("disabled", false);
  $("#resetButton").prop("disabled", false);
  $("#newRandomListBtn").prop("disabled", false);
  pause = null;
};

resetScreen = () => {
  handleNumListSelectChange();
  showSelects();
  hideSearchInputAndButtons();
  $("#num-lists-select").val("");
  $("#searchNumber").val("");
  sessionStorage.clear();
};

sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
