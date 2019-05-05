$(document).ready(function() {
  loadSelectValues();
  $("#num-lists-select").on("change", handleNumListSelectChange);
  $("#num-elements-select").on("change", handleNumElementsSelectChange);
  $("body").on("change", ".list-element", checkIfListsFullAndStartDemo);
});

loadSelectValues = () => {
  const numListsSelectElement = $("#num-lists-select");
  for (let num = 1; num <= 5; ++num) {
    let option = new Option(num, num);
    $(option).html(num);
    numListsSelectElement.append(option);
  }
  const numElementsSelectElement = $("#num-elements-select");
  for (let num = 1; num <= 15; ++num) {
    let option = new Option(num, num);
    $(option).html(num);
    numElementsSelectElement.append(option);
  }
};

handleNumListSelectChange = () => {
  const numElementsSelectElement = $("#num-elements-select");
  $("#input-lists-container").empty();
  $("#fractional-cascade-lists-container").empty();
  numElementsSelectElement.val("");
};

handleNumElementsSelectChange = () => {
  const numberOfLists = $("#num-lists-select option:selected").val();
  const numberOfElements = $("#num-elements-select option:selected").val();
  $("#input-lists-container").empty();
  $("#fractional-cascade-lists-container").empty();
  if (numberOfLists !== "" && numberOfElements !== "") {
    createInputLists(numberOfLists, numberOfElements);
  }
};

createInputLists = (numberOfLists, numberOfElements) => {
  const inputListsContainer = $("#input-lists-container");
  for (let listNum = 0; listNum <= numberOfLists - 1; ++listNum) {
    inputListsContainer.append(
      `<div class="row list-row" id="list-index-${listNum}" style="top:${6 *
        listNum +
        8}em"></div>`
    );
    const currentList = $(`#list-index-${listNum}`);
    currentList.append(`<span class="list-label">List ${listNum + 1}: </span>`);
    for (let elementNum = 0; elementNum <= numberOfElements - 1; ++elementNum) {
      currentList.append(
        `<input type="number" class="list-element" id="list-${listNum}-element-${elementNum}">`
      );
    }
  }
};

checkIfListsFullAndStartDemo = () => {
  let listsFull = true;
  const lists = $("#input-lists-container .list-row");
  for (let index = 0; index < lists.length; ++index) {
    const currList = $(lists[index]).children();
    for (let elemIndex = 1; elemIndex < currList.length; ++elemIndex) {
      const currElement = $(currList[elemIndex]).val();
      if (currElement == "") {
        listsFull = false;
        break;
      }
    }
    if (listsFull === false) {
      break;
    }
  }
  if (listsFull === true) {
    createCascade();
  }
};
