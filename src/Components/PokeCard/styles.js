import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Sprite = styled.img`
  width: 6em;
  height: 6em;
  display: none;
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

export const Card = styled.div`
  margin: 5px;
  border-radius: 10px;
  opacity: 0.95;
  color: #fff;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12),
    0 1px 2px rgba(255, 255, 255, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
      0 10px 10px rgba(255, 255, 255, 0.22);
  }

  img {
    margin: auto;
  }

  h4 {
    margin: 5px 0 0 5px;
  }

  h5 {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
