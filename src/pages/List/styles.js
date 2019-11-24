import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  list-style: none;

  align-content: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  width: 25px;
  height: 25px;
  margin: 10px;
  padding: 5px;
  border-radius: 50%;

  &:hover {
    cursor: default;
    -webkit-user-select: none;
  }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const Spinner = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  background: #111;
  border: 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0;
  }

  ${props =>
    !props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
