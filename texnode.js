let columnTexts = ["Column 11", "Column 22", "Column 33", "Column 44"];

function getTextNodeFromText(arrayOfTexts) {
  if (!Array.isArray(arrayOfTexts)) {
    return [];
  }

  let arrayOfTextNodes = [];
  let textNode = "";
  for (let i = 0; i < arrayOfTexts.length; i++) {
    textNode = document.createTextNode(arrayOfTexts[i]);
    arrayOfTextNodes.push(textNode); // preferred
    // columnTextNodes[i] = textNode; // same as lines 6
  }
  return arrayOfTextNodes;
}
//get td node from text node
let columnTextNodes = getTextNodeFromText(columnTexts);

console.log(columnTextNodes);
columnTexts.forEach((element) => {
  console.log(element);
});
