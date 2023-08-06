import { Header, IMenuElement } from "./components/header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { MainPage } from "./pages";
import { CityMap } from "./components/cityMap/cityMap";

function App() {
  const TITLE = {
    name: "WEB-MAPS || ОКН",
    isTitle: true,
    link: "/",
  };

  const MENU: IMenuElement[] = [
    {
      name: "Города",
      link: "/cities",
    },
    {
      name: "О задании",
      link: "/about",
    },
  ];

  return (
    <>
      <Header title={TITLE} menu={MENU} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/city/:id" element={<CityMap />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
