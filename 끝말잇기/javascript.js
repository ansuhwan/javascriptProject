/*let word = "안수환"; // 처음 단어를 써놓고
while (true) { // 항상  true 로 반복문을 돌아가게 한다
    let newWord = prompt(word);  // 그리고 다음 단어를 입력 받는다
    if(word[word.length -1] === newWord[0]){ // 기존 있는 단와 새로운 단어의 끝과 처음이 같은지 확인한다
        word = newWord;  // 기존 단어를 입력 받은 단어로 바꾼다 그리고 계속 반복
    }else{
        alert("끝말잇기 입니다") // 끝과 첫 단어가 안맞으면 '끝말잇기 입니다' 라는 alert창 출력
    }
}*/

const body = document.body;
const word = document.createElement("div");
word.textContent = "안수환";
document.body.append(word);
let form = document.createElement('form');
document.body.append(form)
let sub = document.createElement("input");
form.append(sub);
let btn = document.createElement("button");
btn.textContent = "입력!";
form.append(btn);
let result = document.createElement("div");
document.body.append(result);
 // form 은 엔터를 가능하게 만든다
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 이걸 추가하면 브라우져 리로딩을 막아준다
  if (word.textContent[word.textContent.length - 1] === sub.value[0]) {
    word.textContent = sub.value;
    sub.value = "";
    sub.focus();
    result.textContent = "딩동댕";
  } else {
    result.textContent = "떙";
    sub.value = "";
    sub.focus();
  }
  
});
  function plus(num1, num2){
    console.log(num1 + num2);
  }
  plus(3,5)

/* let word = "안수환";

while (true) {
  let newWord = prompt(word);
  if (word[word.length - 1] === newWord[0]) {
    word = newWord;
  } else {
    alert("끝말잇기입니다");
  }
}
 */
