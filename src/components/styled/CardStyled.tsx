import styled from "styled-components";

interface BorderProps {
  border: string;
}

export const CardStyled = styled.div<BorderProps>`
  width: 240px;
  height: 320px;
  padding: 24px;
  border: ${(props) => props.border};
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 12px;

    h1 {
      color: rgb(18, 42, 87);
      font-size: 1.4rem;
      font-weight: 600;
    }

    hr {
      border: none;
      width: 100%;
      height: 3px;
      background-color: rgb(18, 42, 87);
    }

    ul {
      margin: 4px 0px;

      li {
        font-size: 0.9rem;
        list-style-type: square;
        list-style-position: inside;

        ::marker {
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-indent: 0px !important;
          text-align: start !important;
          text-align-last: start !important;
        }
      }
    }
  }
`;

export const H2styled = styled.h2`
  color: rgb(18, 42, 87);
  font-size: 1.2rem;
  font-weight: 600;
`;
