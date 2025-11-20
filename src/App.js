import NavBar from "./Components/NavBar";
import Homepage from "./Containers/Homepage";
import News from "./Containers/News";
import Torneio from "./Containers/Torneio";
import NewsDetail from "./Containers/NewsDetail";
import Teams from "./Containers/Teams";
import PageNotFound from "./Containers/PageNotFound";
import Donation from "./Containers/Bilhetes";
import Footer from "./Components/Footer";
import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import SearchComponent from "./Components/SearchComponent";
import Plays from "./Containers/Plays";
import SearchResults from "./Containers/SearchResults";
import ReactGA from "react-ga4";
import ScrollToTop from "./Components/ScrollToTop";
import BilheteSucesso from "./Containers/BilheteSucesso";

const TRACKING_ID = "G-KB6YRJSC6G";
function App() {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <div className="w-full bg-white relative">
      <ScrollToTop />

      <SearchComponent showSearch={showSearch} setShowSearch={setShowSearch} />

      <NavBar
        className=""
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Homepage showSearch={showSearch} setShowSearch={setShowSearch} />
          }
        />

        <Route path="/Bilheteefmbnc4xkhwrfdbmsiwrkdfjwnseyefahdfbwvjgnjdvkuswngrfwcia4sengwjrfbcmuSucesso" element={<BilheteSucesso />} />       
        <Route path="/novidades" element={<News />} />
        <Route path="/news/:news_id" element={<NewsDetail />} />
        <Route path="/equipe" element={<Teams />} />
        <Route path="/bilhetes" element={<Donation />} />
        <Route path="/momentos" element={<Plays />} />
        <Route path="/torneio" element={<Torneio />} />
        <Route path="/search/:searched" element={<SearchResults />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/teams/::team" element ={<TeamsDetail />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
