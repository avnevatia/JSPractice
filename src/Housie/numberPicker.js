let intervalId, currenNumSpan;
let game = 0; // 0 is used for false/off and 1 is used for true/on
let numArr = [], shuffledArr = [];
let gameDur = 8000;
let count = 0;

function housieNumberPic() {
  // console.log(num);
  let num = numArr[count++];
  if(count >= 90) {
    pausePick();
  }
  currenNumSpan.innerHTML = num;
  document.getElementById(num).className = "selectedval";
}

function shuffleArray(arr) {
  let len = arr.length;
  let randomNum, temp;

  for(let i=len-1; i > 0; i-- ) {
    randomNum = Math.floor(Math.random() * (i+1) );
    temp = arr[i];
    arr[i] = arr[randomNum];
    arr[randomNum] = temp;
  }
  return arr;
}

function startPick(duration) {
  console.log(intervalId);
  if (intervalId === undefined || intervalId === null) {
    intervalId = setInterval(housieNumberPic, duration);
    game = 1;
  }
}

function pausePick() {
  clearInterval(intervalId);
  intervalId = null;
  game = 0;
}

function renderTable() {
  var hDiv = document.getElementById("housieDiv");
  var mytable = '<table cellpadding="10" cellspacing="10"><tbody><tr>';

  for (var i = 1; i < 91; i++) {
    numArr[i-1] = i;
    if (i % 10 == 1) {
      mytable += "</tr><tr>";
    }
    mytable += "<td id='" + i + "'>" + i + "</td>";
  }

  mytable += "</tr></tbody></table>";

  hDiv.innerHTML = mytable;
}

window.onload = function () {
  renderTable();
  currenNumSpan = document.getElementById("currentNum");
  shuffledArr = shuffleArray(numArr);
};

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 32) {
    if (game === 0) {
      startPick(gameDur);
    } else {
      pausePick();
    }
  }
});
