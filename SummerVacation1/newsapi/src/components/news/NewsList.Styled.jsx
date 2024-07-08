import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  width: 75%;
`;
export const Category = styled.span`
  display: flex;
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #68e6d3;
  }
`;
export const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
