getLists = () => {
  let inputListOfLists = [];
  const lists = $("#input-lists-container .list-row");
  for (let index = 0; index < lists.length; ++index) {
    let listData = [];
    const currList = $(lists[index]).children();
    for (let elemIndex = 1; elemIndex < currList.length; ++elemIndex) {
      const currElement = $(currList[elemIndex]).val();
      listData.push(Number(currElement));
    }
    inputListOfLists.push(listData);
  }
  return inputListOfLists.reverse();
};

createCascade = (listOfLists = null) => {
  hideSelectsAndRandomButton();
  showSearchInputAndButtons();
  if (listOfLists === null) {
    listOfLists = getLists();
  }
  $("#input-lists-container").empty();
  for (let i = 0; i < listOfLists.length; ++i) {
    let list = listOfLists[i];
    listOfLists[i] = new FCList(list);
  }
  for (let j = 0; j < listOfLists.length - 1; ++j) {
    let bottomList = listOfLists[j];
    let topList = listOfLists[j + 1];
    bottomList.cascadeUp(topList);
  }
  sessionStorage.setItem("listOfLists", JSON.stringify(listOfLists));
  drawCascade(listOfLists);
};

drawCascade = list_of_FC_Lists => {
  document.getElementById("svgContainer").style.height = `${6 *
    (list_of_FC_Lists.length - 1) +
    9}em`;
  const colors = ["blue", "fuchsia", "green", "red", "orange"];
  const fcListsContainer = $("#fractional-cascade-lists-container");
  let linesToDraw = [];
  let arcsToDraw = [];
  for (let listNum = list_of_FC_Lists.length - 1; listNum >= 0; --listNum) {
    fcListsContainer.append(
      `<div class="row list-row" id="fc-list-index-${listNum}" style="top:${6 *
        (list_of_FC_Lists.length - 1 - listNum) +
        8}em"></div>`
    );
    const currentList = $(`#fc-list-index-${listNum}`);
    currentList.append(`<span class="list-label">List ${listNum + 1}: </span>`);
    for (
      let elementNum = 0;
      elementNum < list_of_FC_Lists[listNum].values.length;
      ++elementNum
    ) {
      const { value, original, nextPromoted, indexBelow } = list_of_FC_Lists[
        listNum
      ].values[elementNum];
      let color = original ? "black" : colors[listNum % 5];
      currentList.append(
        `<input type="number" disabled class="list-element" id="fc-list-${listNum}-element-${elementNum}" style="color:${color}" value="${value}">`
      );
      if (!original) {
        linesToDraw.push([
          `#fc-list-${listNum}-element-${elementNum}`,
          `#fc-list-${listNum - 1}-element-${indexBelow}`,
          color
        ]);
      }
      if (nextPromoted != null) {
        arcsToDraw.push([
          `#fc-list-${listNum}-element-${elementNum}`,
          `#fc-list-${listNum}-element-${nextPromoted}`
        ]);
      }
    }
  }
  drawLines(linesToDraw);
  drawArcs(arcsToDraw);
  console.log(arcsToDraw);
};
