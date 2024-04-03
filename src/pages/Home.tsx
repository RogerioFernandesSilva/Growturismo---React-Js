import { BodyHomeContainer } from "../components/styled/BodyHomeContainer";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { ButtonStyled } from "../components/styled/ButtonStyled";

export function Home() {
  return (
    <>
      <DefaultLayout>
        <BodyHomeContainer>
          <div>
            <h1>GrowTravel</h1>
            <p>O melhor serviço para você!</p>
            <ButtonStyled width="200px" padding="20px">
              Saiba mais!
            </ButtonStyled>
          </div>
          <div>
            <img src="HomeImage" />
          </div>
        </BodyHomeContainer>
      </DefaultLayout>
    </>
  );
}
