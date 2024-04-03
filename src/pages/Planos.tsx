import { ButtonStyled } from "../components/styled/ButtonStyled";
import { CardContainer } from "../components/styled/CardContainer";
import { CardStyled } from "../components/styled/CardStyled";
import { DefaultLayout } from "../config/layout/DefaultLayout";

export function Planos() {
  return (
    <>
      <DefaultLayout>
        <CardContainer>
          <CardStyled border="3px solid rgb(18, 42, 87);">
            <div>
              <div>
                <h1>Plano 1</h1>
                <hr />
                <ul>
                  <li>Suporte 24h</li>
                  <li>Serviços de quarto</li>
                  <li>Guia turístico</li>
                </ul>
                <ButtonStyled width="180px" padding="15px">
                  Saiba Mais!
                </ButtonStyled>
              </div>
            </div>
          </CardStyled>
          <CardStyled border="3px solid rgb(18, 42, 87);">
            <div>
              <div>
                <h1>Plano 2</h1>
                <hr />
                <ul>
                  <li>Suporte 24h</li>
                  <li>Serviços de quarto</li>
                  <li>Guia turístico</li>
                  <li>Roteiro de trilhas</li>
                  <li>Serviço personalizado</li>
                </ul>
                <ButtonStyled width="180px" padding="15px">
                  Saiba Mais!
                </ButtonStyled>
              </div>
            </div>
          </CardStyled>
          <CardStyled border="3px solid rgb(18, 42, 87);">
            <div>
              <div>
                <h1>Plano 3</h1>
                <hr />
                <ul>
                  <li>Suporte 24h</li>
                  <li>Serviços de quarto</li>
                  <li>Guia turístico</li>
                  <li>Roteiros de trilhas</li>
                  <li>Serviço personalizado</li>
                  <li>Área Vip</li>
                </ul>
                <ButtonStyled width="180px" padding="15px">
                  Saiba Mais!
                </ButtonStyled>
              </div>
            </div>
          </CardStyled>
        </CardContainer>
      </DefaultLayout>
    </>
  );
}
