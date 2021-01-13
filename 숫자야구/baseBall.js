let body = document.body;

let nums;
let numArr;
function numDraw() {
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numArr = [];

  for (let i = 0; i < 4; i++) {
    let pull = nums.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; // 하나를 뽑는거
    numArr.push(pull); // 집어넣는거
  }
}
numDraw();
console.log(numArr);

let result = document.createElement("h1");
body.append(result);
let wrongText = document.createElement("h2");
body.append(wrongText);
let form = document.createElement("form");
document.body.append(form);
let input = document.createElement("input");
input.type = "text";
input.maxLength = 4;
form.append(input);
let btn = document.createElement("button");
btn.textContent = "입력!";
form.append(btn);

let wrong = 0;
form.addEventListener("submit", function be(event) {
  // 엔터를 쳤을 때
  event.preventDefault(); // 브라우저의 기본 동작 끄기
  let answer = input.value;
  console.log(answer);
  if (answer === numArr.join("")) {
    result.textContent = "홈런";
    input.value = "";
    input.focus();
    numDraw();
    worng = 0;
  } else {
    let answerArr = answer.split("");
    let strike = 0;
    let ball = 0;
    wrong++;
    wrongText.textContent = wrong + "번 틀렸습니다";
    if (wrong > 10) {
      result.textContent =
        "제한 10회를 넘었습니다 실패 입니다 답은:" +
        numArr.join(",") +
        "입니다";
      input.value = "";
      input.focus();
      numDraw();
      worng = 0;
    } else {
      for (let i = 0; i < 4; i++) {
        if (Number(answerArr[i]) === numArr[i]) {
          strike++;
        } else if (numArr.indexOf(Number(answerArr[i])) > -1) {
          ball++;
        }
      }
      result.textContent = strike + "스트라이트" + ball + "볼입니다";
      input.value = "";
      input.focus();
    }
  }
});
