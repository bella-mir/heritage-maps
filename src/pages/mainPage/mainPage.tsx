import { Link } from "react-router-dom";
import { Container } from "../../components";
import { Button } from "antd";
import styles from "./main-page.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { MapBox } from "../../components/mapBox";

export const MainPage = () => {
  const size = useWindowSize();

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.column}>
          <div className={styles.text}>
            <h1 className={styles.title}>ОКН в городах России</h1>
            <h3>
              Учебный проект студентов программы <br /> "Городское планирование"
              ФГРР НИУ ВШЭ
            </h3>
            в рамках курса <br />
            <a
              href="https://www.hse.ru/ba/up/courses/339938982.html"
              target="_blank"
            >
              Методы пространственного анализа.
              <br />
              Продвинутый уровень
            </a>
            <div className={styles.row}>
              <Link to="/cities">
                <Button type="primary" size="large">
                  Подробнее
                </Button>
              </Link>
              {/* <Link to="/map">
            <p>Карта &rarr;</p>
          </Link> */}
            </div>
          </div>
          {size.width && size.width < 680 && (
            <img className={styles.image}></img>
          )}
        </div>
        <div className={styles.mapbox}>
          <MapBox />
        </div>
      </div>
    </Container>
  );
};
