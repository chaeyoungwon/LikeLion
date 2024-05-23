document.addEventListener("DOMContentLoaded", function () {
  let today = new Date(); //오늘 날짜를 불러오는 함수 이용
  let month = today.getMonth() + 1; // 월 불러오기
  let date = today.getDate(); // 일 불러오기
  let h4 = document.querySelector("h4"); // h4 영역에 불러온 날짜 넣기
  h4.textContent = `${month}월 ${date}일 🦁`;
});

document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.getElementById("addbtn"); //할일 추가 버튼
  addButton.addEventListener("click", function () {
    //이벤트리스너로 +버튼 클릭 이벤트 연결
    var input = document.querySelector(".input"); //사용자가 입력한 투두리스트 불러오기
    var inputValue = input.value; //투두리스트의 값

    if (!inputValue) return; //값이 없으면 return

    var newTodoForm = document.createElement("div"); //div 요소를 만들어 newTodoForm에 저장
    newTodoForm.className = "todo-form"; //하단에 추가될 할 일 list 형식 재설정
    newTodoForm.innerHTML = `
      <input type="checkbox" class="checkbox">
      <label>${inputValue}</label>
      <button class="delete-btn">🗑️</button>
      <button class="scrap-btn">🌟</button>
    `; // 체크박스 - 할 일 - 삭제 버튼 - 스크랩 버튼 형식으로 구성

    var list = document.querySelector(".list"); //투두리스트를 넣을 하단 영역 불러오기
    list.appendChild(newTodoForm); //list에 newTodoForm을 넣기
    input.value = "";
  });

  document.querySelector(".list").addEventListener("click", function (e) {
    //리스트 영역에서 클릭 이벤트가 발생했을 경우
    if (e.target.classList.contains("delete-btn")) {
      //삭제 버튼을 클릭 했을 경우
      e.target.parentElement.remove(); //부모 요소 삭제
    } else if (e.target.classList.contains("scrap-btn")) {
      //스크랩 버튼을 클릭 했을 경우
      var label = e.target.parentElement; //부모 요소
      label.classList.toggle("highlight"); //부모 요소 highlight 시키기 (toggle을 이용해 버튼 클릭 여부에 따른 효과 반전시키기)
    } else if (e.target.classList.contains("checkbox")) {
      //체크박스 클릭 했을 경우
      var label = e.target.nextElementSibling; //옆 요소 (할 일)
      if (e.target.checked) {
        //체크박스가 체크되어 있는 경우
        label.style.textDecoration = "line-through"; //라벨에 취소선 추가
      } else {
        label.style.textDecoration = "none"; //라벨의 취소선 삭제
      }
    }
  });
});
