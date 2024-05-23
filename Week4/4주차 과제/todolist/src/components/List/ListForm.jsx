import React from "react";
import * as S from "./List.Styled";

const ListForm = ({ todoItem, index, handleCheckBox, handleDelete }) => {
  //투두리스트 하나 형태
  return (
    //투두리스트 하나 당 인덱스 부여
    <S.ListForm key={index}>
      <S.ListContent>
        <S.CheckBox
          type="checkbox" //체크박스 형태
          checked={todoItem.checked} //해당 투두리스트의 체크 여부
          onChange={() => handleCheckBox(index)}
        />
        <S.Label
          style={{
            //체크하면 취소선 생기도록 구현
            textDecoration: todoItem.checked ? "line-through" : "none",
          }}
        >
          {todoItem.text}
        </S.Label>
      </S.ListContent>
      <S.DelBtn onClick={() => handleDelete(index)}> 🗑️</S.DelBtn>
    </S.ListForm>
  );
};

export default ListForm;
