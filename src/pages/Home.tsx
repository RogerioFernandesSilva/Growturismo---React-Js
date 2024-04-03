import { BodyHomeContainer } from "../components/styled/BodyContainer";
import HomeImage from "../assets/home.svg";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { ButtonStyled } from "../components/styled/ButtonStyled";

export function Home() {
  return (
    <>
    <DefaultLayount>
      <BodyHomeContainer>
        <div>
          <h1>GrowTravel</h1>
          <p>O melhor serviço para você!</p>
          <ButtonStyled width="200px" padding="20px">
                  Saiba mais!
          </ButtonStyled>
        </div>
        <div>
          <img src={HomeImage}"" />
        </div>
      </BodyHomeContainer>
    </DefaultLayount>
    </>
  );
}
