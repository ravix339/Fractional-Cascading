drawLines = linesToDraw => {
  console.log(linesToDraw);
  id_one = linesToDraw[0][0];
  id_two = linesToDraw[0][1];

  //get coordinates of first element
  let firstElement = $(id_one);
  let offsetOne = firstElement.offset();
  let height = firstElement.height();
  let startLeft = offsetOne.left;
  let startBottom = offsetOne.top + height;
  console.log(startLeft, startBottom);

  //get coordinates of second element
  let secondElement = $(id_two);
  let offsetTwo = firstElement.offset();
  let width = firstElement.width();
  let endRight = offsetTwo.left + width;
  let endTop = offsetTwo.top;
  console.log(endRight, endTop);
};
