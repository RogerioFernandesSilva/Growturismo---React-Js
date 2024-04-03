import { CardContainer } from "../components/styled/CardContainer";
import { CardStyled, H2styled } from "../components/styled/CardStyled";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import hospedagemImg from "../assets/hotel.svg";

export function Servicos() {
  return (
    <>
      <DefaultLayout>
        <CardContainer>
          <CardStyled border="none">
            <img src={hospedagemImg} alt="hospedagemImg" />
            <H2styled>Hospedagem</H2styled>
          </CardStyled>
        </CardContainer>
      </DefaultLayout>
    </>
  );
}
