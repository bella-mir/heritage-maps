import { useParams } from "react-router-dom";
import { Container } from "../container";
import { CITIES } from "./cityMap.constants";
import style from "./cityMap.module.scss";

export const CityMap = () => {
  const { id } = useParams();
  const gitHubLink = CITIES.filter((city) => city.id === Number(id))[0];
  const { City, mapLink } = gitHubLink;

  return (
    <Container className={style.container}>
      <div className={style.name}>{City}</div>
      <iframe
        name="iframe1"
        src={mapLink}
        style={{
          width: "100%",
          minHeight: "calc(100vh - 230px)",
          outline: "none",
          border: "1px solid #C7C8CA",
        }}
      ></iframe>
    </Container>
  );
};
