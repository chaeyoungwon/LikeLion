import React, { useState, useEffect } from "react";
import * as S from "./List.Styled";
import ListForm from "./ListForm";

const List = () => {
  //useState로 투두리스트 목록과 입력값 관리
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //페이지 처음 로드 시 localStorage에서 목록들을 불러옴
    const savedTodo = JSON.parse(localStorage.getItem("todo"));
    if (savedTodo) {
      setTodo(savedTodo);
    }
  }, []);

  const saveTodoToLocalStorage = (newTodo) => {
    //변경된 투두리스트 목록들을 localStorage에 저장
    localStorage.setItem("todo", JSON.stringify(newTodo));
  };

  const handleInput = (e) => {
    //입력값을 받을 때마다 사용하는 함수
    setInput(e.target.value);
  };

  const handleAdd = () => {
    //투두리스트 추가 함수
    if (!input) return; //입력값이 없으면 종료
    const newTodo = [...todo, { text: input, checked: false }]; //새로운 투두리스트 객체 생성
    setTodo(newTodo); //투두리스트 업데이트
    saveTodoToLocalStorage(newTodo); //localStorage에 저장
    setInput(""); //input칸 초기화
  };

  const handleDelete = (i) => {
    //투두리스트 삭제 함수
    const newTodo = [...todo];
    newTodo.splice(i, 1); //선택된 투두리스트 삭제
    setTodo(newTodo); //투두리스트 업데이트
    saveTodoToLocalStorage(newTodo); //localStorage에 저장
  };

  const handleCheckBox = (index) => {
    //체크박스 선택 시 사용되는 함수
    const newTodo = [...todo];
    newTodo[index] = {
      //현재 인덱스에 해당하는 투두리스트
      ...newTodo[index], //투두리스트 복제
      checked: !newTodo[index].checked, //현재 상태의 체크 여부에 따라
    };
    setTodo(newTodo); //투두리스트 업데이트
    saveTodoToLocalStorage(newTodo); //localStorage에 저장
  };

  return (
    <S.List>
      <S.Title>To do List 📋</S.Title>
      <S.Date>📆 {new Date().toLocaleDateString()}</S.Date>
      <S.InputBox>
        <S.Input
          type="text"
          placeholder="오늘의 할 일을 적어주세요!"
          value={input} //입력창에 입력 받는 텍스트
          onChange={handleInput} //입력값 변경시 호출
        />
        <S.AddBtn onClick={handleAdd}>+</S.AddBtn>
      </S.InputBox>

      <S.ListContainer>
        {todo.map(
          (
            todoItem,
            index //인덱스를 부여한 투두리스트들을
          ) => (
            <ListForm
              key={index}
              todoItem={todoItem} //해당 투두리스트 목록
              index={index}
              handleCheckBox={handleCheckBox} //투두리스트 체크박스 함수
              handleDelete={handleDelete} //투두리스트 삭제 함수
            />
          )
        )}
      </S.ListContainer>
    </S.List>
  );
};

export default List;
