import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-height: 75px;
  margin: 5px 30px;
  padding: 10px;

  border-bottom: 1px solid #999;
  border-bottom-width: 20%;

  img {
    max-height: 48px;
    padding-right: 20px;
  }

  > a {
    text-decoration: none;
    border-left: 1px solid #999;
    padding-left: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      color: #ccc;
    }
  }
`;
