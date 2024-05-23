import styled from "styled-components";

export const List = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(28, 28, 28);
  @media (min-width: 375px) and (max-width: 767px) {
    //모바일 반응형
    padding-left: 20px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin: 10px 0;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Date = styled.span`
  display: flex;
  border-radius: 15px;
  background-color: #292828;
  padding: 5px 10px;
  font-size: 14px;
  margin: 5px 0;
  color: white;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 10px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #343333;
  color: white;
  font-size: 13px;
  width: 200px;
  height: 20px;
  outline: none;
  border: none;
  padding: 10px;
  margin: 10px;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 11px;
    width: 150px;
    height: 15px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  color: #6c6c6c;
  font-weight: 600;
  background-color: #ffea00;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const DelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffea00;
  border: none;
  cursor: pointer;
`;

export const ListForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 20px;
  padding: 10px;
  background-color: #ffea00;
  border-radius: 25px;
  color: #623d23;
  margin: 10px 0;
  position: relative;

  &::before {
    width: 20px;
    height: 20px;
    content: "";
    position: absolute;
    bottom: 3px;
    left: 12px;
    transform: translateX(-50%);
    border: none;
    border: 10px solid;
    border-color: transparent transparent #ffea00 transparent;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 8px;
    width: 130px;
    height: 10px;
    margin: 4px 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  overflow-y: auto;
  max-height: 350px;
  padding: 0 10px;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 60%;
  }
`;

export const CheckBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 20px;
  z-index: 1000;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: #472f1d;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 11px;
  }
`;

export const ListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
