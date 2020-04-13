let intervalId, currenNumSpan;
const MIN = 1;
const MAX = 91;

function getRandomNum(numMin, numMax) {
  let num = Math.round(Math.random() * (numMax - numMin) + numMin);
  console.log(num);
  currenNumSpan.innerHTML = num;
  // document.getElementById(num).style.backgroundColor = "green";
  // document.getElementById(num).style.color = "#00f3ff";
  // document.getElementById(num).style.font = "italic bold 20px arial,serif";
  document.getElementById(num).className = "selectedval";
}

function startPick() {
  if (intervalId === undefined || intervalId === null) {
    intervalId = setInterval(getRandomNum, 3000, MIN, MAX);
  }
}

function pausePick() {
  clearInterval(intervalId);
  intervalId = null;
}

function renderTable() {
  var hDiv = document.getElementById("housieDiv");
  var mytable = '<table cellpadding="10" cellspacing="10"><tbody><tr>';

  for (var i = 1; i < 91; i++) {
    if (i % 10 == 1) {
      mytable += "</tr><tr>";
    }
    mytable += "<td id='" + i + "'>" + i + "</td>";
  }

  mytable += "</tr></tbody></table>";

  hDiv.innerHTML = mytable;
}

window.onload = function() {
    renderTable();
    currenNumSpan = document.getElementById("currentNum");
};
