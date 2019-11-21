import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 18%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
input {
    background: #fff;
    border: 1px solid #999;
    height: 30px;
    max-width: 130px;
    width: 100%;
    border-radius: 20px;
    padding: 5px;
  }
  svg {
    margin: 5px;

    &:hover {
      cursor: pointer;
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

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
