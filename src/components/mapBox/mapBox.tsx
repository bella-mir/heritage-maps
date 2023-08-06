import cities from "./data/cities.json";
import cities_ex from "./data/cities_extent.json";
// import world from "./data/world.json";
// import * as d3 from "d3";
import { geoPath, geoMercator } from "d3-geo";
import { select } from "d3-selection";
import { Link, useNavigate } from "react-router-dom";
import styles from "./mapBox.module.scss";

export const MapBox = () => {
  const width = 650;
  const height = 500;

  const projection = geoMercator().fitSize([500, 400], cities_ex);
  const navigate = useNavigate();

  const path = geoPath().projection(projection);

  return (
    <svg width={width} height={height}>
      <g className="geojson-layer">
        {/* {
          <path
            d={path(world)}
            fill="#D7C3F0"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        } */}
        {cities.features.map((d) => (
          <>
            <path
              key={`${d.properties.City}-${d.properties.id}`}
              d={path(d)}
              fill="#939598"
              stroke="#E6E7E8"
              strokeWidth="8"
              strokeOpacity="0.5"
            />
            <path
              key={d.properties.City}
              d={path(d)}
              fill="#939598"
              stroke="#C7C8CA"
              strokeWidth="1"
              strokeOpacity="1"
              onMouseEnter={(e) => {
                select(e.target).attr("fill", "#0F2D69");
              }}
              onMouseOut={(e) => {
                select(e.target).attr("fill", "#939598");
              }}
              onClick={() => navigate(`/city/${d.properties.id}`)}
              className={styles.point}
            />

            <text
              x={path.centroid(d)[0] + 10}
              y={path.centroid(d)[1] + 5}
              font-size="16"
              className={styles.link}
              onClick={() => navigate(`/city/${d.properties.id}`)}
            >
              {d.properties.City}
            </text>
          </>
        ))}
      </g>
    </svg>
  );
};
