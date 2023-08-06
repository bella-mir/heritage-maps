import { CITIES } from "./cityList.constants";
import { Container } from "../container";
import Card from "antd/es/card";
import style from "./cityList.module.scss";

export const CityList = () => {
  return (
    <Container>
      <div className={style.content}>
        {CITIES.map((city) => (
          <Card title={city.City} className={style.card}>
            <div className={style.cardContent}>
              <a href={city.gitHubLink} target="_blank">
                GitHub репозиторий
              </a>
              <a href={city.mapLink} target="_blank">
                Карта
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};
