import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  list-style: none;
  background-color: #111;

  align-content: center;
  justify-content: center;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const PageNumber = styled.input`
  background-color: #fff;
  max-width: 25px;
  margin: 10px;
  border-radius: 5px;
  box-decoration-break: none;
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
