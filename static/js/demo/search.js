$(document).ready(function() {
  $("#startSearchButton").on("click", handleSearchButtonClick);
  $("#resetButton").on("click", resetScreen);
});

handleSearchButtonClick = () => {
  const searchNumber = $("#searchNumber").val();
  if (searchNumber) startSearch(searchNumber);
};

startSearch = searchNumber => {
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

  //diable and start search button
  $("#startSearchButton").prop("disabled", true);
  $("#searchNumber").prop("disabled", true);
  $("#resetButton").prop("disabled", true);
  setTimeout(() => {
    $("#startSearchButton").prop("disabled", false);
    $("#searchNumber").prop("disabled", false);
    $("#resetButton").prop("disabled", false);
  }, 1500 * hits.length);

  //start search amimation using hits data
  for (let i = 0; i < hits.length; ++i) {
    setTimeout(() => {
      const hit = hits[i];
      let { list, index, found } = hit;
      list = numLists - list - 1;
      $(`#fc-list-${list}-element-${index}`).addClass("animate");
      setTimeout(() => {
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
      }, 1500);
    }, 1500 * i);
  }
};

resetScreen = () => {
  handleNumListSelectChange();
  showSelects();
  hideSearchInputAndButtons();
  $("#num-lists-select").val("");
  $("#searchNumber").val("");
  sessionStorage.clear();
};
