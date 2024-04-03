import styled from "styled-components";

export const BodyHomeContainer = styled.div`
  display: flex;
  max-width: 992px;
  min-width: 320px;
  margin: auto;
  height: calc(-190px + 100vh);
  align-items: center;
  justify-content: space-around;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    min-height: 200px;

    img {
      width: 90%;
    }

    h1 {
      margin-bottom: 10px;
      color: rgb(18, 42, 87);
      font-size: 2.3rem;
      font-weight: 600;
    }

    button {
      background-color: rgb(18, 42, 87);
      color: white;
      font-weight: 600;
      border-radius: 40px;
      border: 2px solid rgb(18, 42, 87);
      margin-top: 10px;
      cursor: pointer;
      transition: all 0.2s ease 0s;
      width: 200px;
      padding: 20px;

      &:hover {
        background-color: rgb(75, 95, 135);
        color: rgb(255, 255, 255);
        border: 2px solid rgb(75, 95, 135);
      }
    }
  }
`;
