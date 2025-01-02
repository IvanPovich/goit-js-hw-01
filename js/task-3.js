'use strict';

function getElementWidth(content, padding, border) {
  const totalWidth =
    toNumber(content) +
    (toNumber(padding) * 2) +
    (toNumber(border) * 2);

  return totalWidth;
}

function toNumber(property) {
  return Number.parseFloat(property);
}

// Examples
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
