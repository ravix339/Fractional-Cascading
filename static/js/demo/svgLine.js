drawLines = linesToDraw => {
  for (let index = 0; index < linesToDraw.length; ++index) {
    const element = linesToDraw[index];
    const id_one = element[0];
    const id_two = element[1];
    const color = element[2];
    const containerDivTop = $(
      "#fractional-cascade-lists-container"
    )[0].getBoundingClientRect().top;
    const containerDivLeft = $(
      "#fractional-cascade-lists-container"
    )[0].getBoundingClientRect().lect;

    //get coordinates of first element
    const firstElement = $(id_one);
    const rectOne = firstElement[0].getBoundingClientRect();
    const x1 = (rectOne.right + rectOne.left) / 2;
    const y1 = rectOne.bottom;

    //get coordinates of second element
    const secondElement = $(id_two);
    const rectTwo = secondElement[0].getBoundingClientRect();
    const x2 = (rectTwo.right + rectTwo.left) / 2;
    const y2 = rectTwo.top;

    let newLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    newLine.setAttribute("id", "line2");
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1 - containerDivTop);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2 - containerDivTop);
    newLine.setAttribute("stroke", color);
    newLine.setAttribute("stroke-width", 1.5);
    $("svg").append(newLine);
  }
};
