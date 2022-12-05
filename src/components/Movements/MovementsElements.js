import styled from 'styled-components';

export const Container = styled.div`
  display: 'flex';
  margin: '.5em 0em';
  background-color: 'gold';
  height: '3em';
  width: '100%';
`;

export const Form = styled.form`
  background: #010101;
  max-width: 500px;
  height: auto;
  width: 60vw;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const EntryDiv = styled.div`
  display: flex;
  padding: 18px 12px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContainerPage = styled.div`
  background-color: black;
  display: 'grid';
  height: '80vh';
  width: '40vw';
`;
export const TittlePage = styled.h2`
  margin: '6px';
  color: white;
`;
export const SubDivPage = styled.div`
  background-color: #101010;
  border-radius: 12px;
  margin: '6px';
  margin-top: '2em';
  width: '98%';
`;

export const Button = styled.button`
  border-radius: 50px;
  background: yellow;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: green;
  }
`;
