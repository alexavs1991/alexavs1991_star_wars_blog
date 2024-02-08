import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Cards = () => {
  const { store, actions } = useContext(Context);

  console.log(store.characters);

  return (
    <>
      <div className="card-deck">
        <div className="people-header">
          <div className="d-flex overflow-auto p-2 w-2 bg bg-dark">
            {store.characters.map((item, index) => {
              return (
                <div key={index} className="card bg bg-dark">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${item.result.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-white">
                      {item.result.properties.name}
                    </h5>
                    <p className="card-text text-white">
                      Gender : {item.result.properties.gender}
                    </p>
                    <p className="card-text text-white">
                      Hair color : {item.result.properties.hair_color}
                    </p>
                    <p className="card-text text-white">
                      Eye color : {item.result.properties.eye_color}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to={`/people/${item.result.uid}`}
                        className="btn btn-secondary"
                      >
                        Learn More!
                      </Link>

                      <button
                        className="btn btn-outline-danger mx-2"
                        onClick={() => actions.addFavorite(item)}
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="card-deck">
        <div className="planet-header">
          <div className="d-flex overflow-auto p-2 w-2 bg bg-dark">
            {store.planets.map((item, index) => {
              return (
                <div key={index} className="card bg bg-dark">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${item.result.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-white">
                      {item.result.properties.name}
                    </h5>
                    <p className="card-text text-white">
                      Population : {item.result.properties.population}
                    </p>
                    <p className="card-text text-white">
                      Terrain : {item.result.properties.terrain}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to={`/planet/${item.result.uid}`}
                        className="btn btn-secondary"
                      >
                        Learn More!
                      </Link>

                      <button
                        className="btn btn-outline-danger mx-2"
                        onClick={() => actions.addFavorite(item)}
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>



      <div className="card-deck">
        <div className="vehicle-header">
          <div className="d-flex overflow-auto p-2 w-2 bg bg-dark">
            {store.vehicles.map((item, index) => {
              return (
                <div key={index} className="card bg bg-dark">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${item.result.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-white">
                      {item.result.properties.name}
                    </h5>
                    <p className="card-text text-white">
                      Model : {item.result.properties.model}
                    </p>
                    <p className="card-text text-white">
                      Cargo capacity : {item.result.properties.cargo_capacity}
                    </p>
                    <p className="card-text text-white">
                      Consumables : {item.result.properties.consumables}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to={`/vehicle/${item.result.uid}`}
                        className="btn btn-secondary"
                      >
                        Learn More!
                      </Link>
                      <button
                        className="btn btn-outline-danger mx-2"
                        onClick={() => actions.addFavorite(item)}
                      >
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
