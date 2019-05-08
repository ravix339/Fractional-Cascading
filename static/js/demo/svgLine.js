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
    )[0].getBoundingClientRect().left;

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
    newLine.setAttribute("id", `${id_one}-TO-${id_two}`);
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1 - containerDivTop);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2 - containerDivTop);
    newLine.setAttribute("stroke", color);
    newLine.setAttribute("stroke-width", 1.5);
    newLine.className += "svgLine";
    $("svg").append(newLine);
  }
};

drawArcs = arcsToDraw => {
  for (let index = 0; index < arcsToDraw.length; ++index) {
    const element = arcsToDraw[index];
    const id_one = element[0];
    const id_two = element[1];
    const color = element[2];
    const containerDivTop = $(
      "#fractional-cascade-lists-container"
    )[0].getBoundingClientRect().top;
    const containerDivLeft = $(
      "#fractional-cascade-lists-container"
    )[0].getBoundingClientRect().left;

    //get coordinates of first element
    const firstElement = $(id_one);
    const rectOne = firstElement[0].getBoundingClientRect();
    const x1 = (rectOne.right + rectOne.left) / 2;
    const y1 = rectOne.top - containerDivTop;

    //get coordinates of second element
    const secondElement = $(id_two);
    const rectTwo = secondElement[0].getBoundingClientRect();
    const x2 = (rectTwo.right + rectTwo.left) / 2;
    const y2 = rectTwo.top - containerDivTop;

    let newArc = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newArc.setAttribute("id", `${id_one}-TO-${id_two}`);
    if (x2 > x1) {
      newArc.setAttribute(
        "d",
        `M ${x1} ${y1} A ${(x2 - x1) / 2} 20 0 0 1 ${x2} ${y2}`
      );
    } else {
      newArc.setAttribute(
        "d",
        `M ${x1} ${y1} A ${(x2 - x1) / 2} 20 0 1 0 ${x2} ${y2}`
      );
    }
    // newArc.setAttribute("y1", y1 - containerDivTop);
    // newArc.setAttribute("x2", x2);
    // newArc.setAttribute("y2", y2 - containerDivTop);
    newArc.setAttribute("fill", "transparent");
    newArc.setAttribute("stroke", "purple");
    newArc.setAttribute("stroke-width", 1.5);
    newArc.className += "svgLine";
    $("svg").append(newArc);
  }
};
