import styled from "styled-components";
export const Linea = styled.div`
  background-color: ${({ theme }) => theme.color2};
  height: 2px;
  border-radius: 15px;
  margin: 20px 0;
  position: relative;
  text-align: center;
  span {
    top: -12px;
    position: absolute;
    background-color: ${({ theme }) => theme.bgtotal};
    text-align: center;
    padding: 0 10px;
    color: ${({ theme }) => theme.color2};
    font-weight: 700;
  }
`;
