$(document).ready(function() {
  $("#startSearchButton").on("click", handleSearchButtonClick);
});

handleSearchButtonClick = () => {
  const searchNumber = $("#searchNumber").val();
  if (searchNumber) startSearch(searchNumber);
};

startSearch = searchNumber => {
  let listOfLists = sessionStorage.getItem("listOfLists");
  listOfLists = JSON.parse(listOfLists).reverse();
  let searchData = new Search();
  searchData.driver(listOfLists, Number(searchNumber));
  const { hits, results } = searchData;
  for (let index = 0; index < hits.length; ++index) {
    const hit = hits[index];
  }
};
