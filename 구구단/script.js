let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let result1 = num1 * num2;

let body = document.createElement("body");
let div = document.createElement("div");
div.textContent = String(num1) + "곱하기" + String(num2) + "는?";
document.body.append(div);

let form = document.createElement("form");
document.body.append(form);
let sub = document.createElement("input");
form.append(sub);
let btn = document.createElement("button");
btn.textContent = "입력!";
form.append(btn);
let result2 = document.createElement("div");
document.body.append(result2);
// form 은 엔터를 가능하게 만든다
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 이걸 추가하면 브라우져 리로딩을 막아준다
  console.log(result1, sub.value);
  if (result1 === Number(sub.value)) {
    result2.textContent = "딩동댕";
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    div.textContent = String(num1) + "곱하기" + String(num2) + "는?";
    sub.value = "";
    sub.focus();
  } else {
    result2.textContent = "떙";
    sub.value = "";
    sub.focus();
  }
});
