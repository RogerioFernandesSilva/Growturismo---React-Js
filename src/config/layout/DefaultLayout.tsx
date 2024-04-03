import { FooterStyled } from "../../components/styled/Footer.styled";
import { HeaderStyled } from "../../components/styled/Header.Styled";

export function DefaultLayout({ children }) {
  return (
    <>
      <HeaderStyled>
        <div>
          <h1>
            <a href="/">GrowTravel</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="/quem-somos">Quem Somos</a>
              </li>
              <li>
                <a href="/servicos">Serviços</a>
              </li>
              <li>
                <a href="/planos">Planos</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderStyled>
      {children}
      <FooterStyled>
        <div>
          <p>©2024 Full Stack Growdev</p>
          <p>17ª Edição</p>
        </div>
      </FooterStyled>
    </>
  );
}
