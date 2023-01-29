import React, { useEffect, useState } from "react";
import Gameitem from "./Gameitem";
import icon1 from "D:/React_projects/games-info/src/images/console.png";

import icon from "D:/React_projects/games-info/src/images/game-controller.png";
export default function Page() {
  const [search, setSearch] = useState("batman");

  const [games, setGames] = useState([]);
  const fetchData = async () => {
    const url = `https://www.cheapshark.com/api/1.0/games?title=${search}&exact=0`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setGames(parsedData);
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  const handleOnChange = (event) => {
    let value = event.target.value;
    setSearch(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-3" href="/">
            <img src={icon} alt="Bootstrap" width="30" height="30" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleOnChange}
              />
            </form>
          </div>
        </div>
      </nav>

      <div className="row">
        {games.length !== 0 ? (
          games.map((element) => {
            console.log(element.gameID);

            return (
              <div key={element.gameID} className="col-md-3">
                <Gameitem
                  thumb={element.thumb ? element.thumb : icon1}
                  title={element.external}
                  gameId={element.gameID}
                  steamAppId={element.steamAppID}
                  cheapest={element.cheapest}
                />
              </div>
            );
          })
        ) : (
          <div className="text-center text-light">
            {" "}
            <h1>No results found.</h1>{" "}
          </div>
        )}
      </div>
    </>
  );
}
