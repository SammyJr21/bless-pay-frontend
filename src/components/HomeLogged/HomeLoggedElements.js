import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ffeb3b;
  box-shadow: 0 0 20px 3px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
export const ContainerSvg = styled.div`
  height: 100px;
  > svg {
    position: fixed;
    color: black;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
