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
  console.log(listOfLists);
  let searchData = new Search();
  searchData.driver(listOfLists, searchNumber);
  console.log(searchData.results);
  console.log(searchData.hits);
};
