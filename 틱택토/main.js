let 바디 = document.body;
let 테이블 = document.createElement("table");
let 설명 = document.createElement("h1");
let 줄들 = [];
let 칸들 = [];
let 턴 = "X";

바디.append(설명);

설명.innerText = "틱택토";

let 비동기콜백 = function (event) {
  let 몇줄 = 줄들.indexOf(event.target.parentNode);
  let 몇칸 = 칸들[몇줄].indexOf(event.target);
  //  칸이 미리 채워져 있는가?
  if (칸들[몇줄][몇칸].textContent !== "") {
    console.log("빈 칸이 아닙니다");
  } else {
    console.log("빈 칸 입니다");
    칸들[몇줄][몇칸].textContent = 턴;
    // 세칸 다 채워졌나??
    let 다참 = false;
    // 가로줄 검사
    if (
      칸들[몇줄][0].textContent === 턴 &&
      칸들[몇줄][1].textContent === 턴 &&
      칸들[몇줄][2].textContent === 턴
    ) {
      다참 = true;
    }
    // 세로줄 검사
    if (
      칸들[0][몇칸].textContent === 턴 &&
      칸들[1][몇칸].textContent === 턴 &&
      칸들[2][몇칸].textContent === 턴
    ) {
      다참 = true;
    }
    // 대각선 검사
    if (몇줄 - 몇칸 === 0) {
      // 대각선 검사 필요한 경우
      if (
        칸들[0][0].textContent === 턴 &&
        칸들[1][1].textContent === 턴 &&
        칸들[2][2].textContent === 턴
      ) {
        다참 = true;
      }
    }
    if (Math.abs(몇줄 - 몇칸) === 2) {
      // 대각선 검사 필요한 경우
      if (
        칸들[0][2].textContent === 턴 &&
        칸들[1][1].textContent === 턴 &&
        칸들[2][0].textContent === 턴
      ) {
        다참 = true;
      }
    }
    // 다 찼으면
    if (다참) {
      console.log(턴 + "님이 승리 했습니다");
      설명.innerText = 턴 + "님이 승리 했습니다";
      // 초기화
      턴 = "X";
      칸들.forEach(function (줄) {
        줄.forEach(function (칸) {
          칸.textContent = "";
        });
      });
    } else {
      if (턴 === "X") {
        턴 = "O";
      } else {
        턴 = "X";
      }
    }
  }
};
for (let i = 1; i <= 3; i++) {
  let 줄 = document.createElement("tr");
  줄들.push(줄);
  칸들.push([]);
  for (let j = 1; j <= 3; j++) {
    let 칸 = document.createElement("td");
    칸.addEventListener("click", 비동기콜백);
    칸들[i - 1].push(칸);
    줄.appendChild(칸);
  }
  테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log(줄들, 칸들);
