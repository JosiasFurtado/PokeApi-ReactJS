import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
`;

export const CardHeader = styled.div`
  background-color: #333;
  border-radius: 15px 15px 0 0;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin: 0 10px 0 10px;

    font-size: 18px;

    span {
      border-radius: 19px;
      padding: 4px;
      margin-left: 4px;
    }
  }

  h5 {
    color: #fff;
    font-weight: bold;
    align-self: center;
  }
`;

export const CardBody = styled.div`
  background: linear-gradient(-90deg, #111, #222);

  > div {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }

  img {
    height: 170px;
    width: auto;
    margin-top: 30px;
  }
`;

export const Status = styled.div`
  margin-top: 15px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  color: #fff;
  h4 {
    margin-left: 3px;
  }
  > p {
    font-size: 16px;
    margin: 10px 15px 0 3px;
  }
`;

export const Power = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Stat = styled.div`
  background-color: ${props => props.background};
  width: ${props => `${props.width >= 99 ? 99 : props.width}%`};
  margin-top: 13px;
  border-radius: 5px;

  > small {
    color: #fff;
    font-size: 14px;
    margin-left: ${props => `${props.width >= 87 ? 87 : props.width}%`};
    max-width: 100%;
  }
`;

export const Description = styled.div`
  max-width: 100%;
  padding: 15px 5px;
  color: #fff;

  border-bottom: 1px solid #999;
`;

export const Profile = styled.div`
  color: #fff;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  h5 {
    display: flex;
    position: absolute;
    font-size: 18px;
    justify-content: center;
  }

  h6 {
    font-size: 14px;
    margin-top: 5px;
  }

  > div {
    margin: 20px 10px 10px 10px;
    width: 100%;
    max-width: 250px;

    div.gender {
      display: flex;
      flex-direction: row;
      div {
        max-width: 100px;
        border-radius: 5px;
        width: ${props => `${props.width}%`};

        small {
          margin: 5px;
        }
      }
    }
  }
`;

export const CardFooter = styled.div`
  background-color: #333;
  border-radius: 0 0 15px 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;

  font-size: 14px;

  a {
    color: #fff;
    align-self: center;
    margin: 5px;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: #999;
    }
  }
`;
