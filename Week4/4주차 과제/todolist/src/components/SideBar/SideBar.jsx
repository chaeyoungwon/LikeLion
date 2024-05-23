import React from "react";
import styled from "styled-components";

const SideBar = () => {
  //사이드바 구성
  return (
    <SideBarForm>
      <Profile>👤</Profile>
      <Todo>📋</Todo>
      <Setting>⚙️</Setting>
    </SideBarForm>
  );
};

const SideBarForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  margin: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #343333;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 60px;
    padding: 10px 0;
  }
`;

const Profile = styled.span`
  display: flex;
  width: 100px;
  height: 100px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const Todo = styled(Profile)``;

const Setting = styled(Profile)``;

export default SideBar;
