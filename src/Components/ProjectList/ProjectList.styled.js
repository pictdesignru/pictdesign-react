import styled from "styled-components";

const StyledProjectList = styled.ul`
  max-width: 1920px;
  width: 100%;
  list-style-type: none;
  padding: 0 100px 100px 100px;
  box-sizing: border-box;
  padding-top: 100px;
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
  align-self: center;

  @media screen and (min-width: 1921px) {
    max-width: none;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px;
    grid-template-columns: 1fr;
  }
`;

export default StyledProjectList;
