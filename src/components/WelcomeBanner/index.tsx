import * as S from "./styles";
import heroImg from "../../assets/banner.avif";

const HeroBanner: React.FC = () => {
    return (
        <S.HeroSection $bgImage={heroImg}>
            <S.Content>
                <S.Title>
                    Bienvenido a
                    <br />
                    The Open Gallery
                </S.Title>

                <S.Description>
                    Esta plataforma es un proyecto de ingeniería front-end
                    especializado en la difusión digital de las bellas artes. A
                    través de una integración dinámica con la API pública del{" "}
                    <strong>Art Institute of Chicago (AIC)</strong>, la interfaz
                    ofrece una experiencia inmersiva y acceso en tiempo real a
                    una de las colecciones más prestigiosas del mundo.
                </S.Description>

                <S.NoteContainer>
                    <S.NoteTitle>Nota importante:</S.NoteTitle>
                    <S.NoteText>
                        Para garantizar la precisión en los resultados de
                        búsqueda, por favor realice sus consultas en{" "}
                        <strong>inglés</strong>. Actualmente, la API pública del
                        <strong>Instituto de Arte de Chicago (AIC)</strong>{" "}
                        procesa las solicitudes exclusivamente en este idioma.
                    </S.NoteText>
                </S.NoteContainer>
            </S.Content>
        </S.HeroSection>
    );
};

export default HeroBanner;
