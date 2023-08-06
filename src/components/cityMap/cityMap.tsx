import { Container } from "../container";

export const CityMap = () => {
  return (
    <Container>
      <iframe
        name="iframe1"
        src="https://nbviewer.org/github/a-berez/OKN_Novgorod/blob/main/index.html"
        style={{ width: "100%", minHeight: "calc(100vh - 180px)" }}
      ></iframe>
    </Container>
  );
};
