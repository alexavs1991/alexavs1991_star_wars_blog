import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const PlanetsDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const planet = store.planets.find((item) => item.result.uid == params.id);


  return (
   
    <div className="container card mb-5 mt-5 bg bg-dark">
      {store.planets ? (
          <div className="row">
            <div className="col-md-4 p-4 mb-5 mt-5">
              <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold fs-1 text-white">{planet.result.properties.name}</h5>
                <ul id="details" className="card-text justify-content-center fs-4 text-white p-5">
                  <li> <strong>Population</strong>: {planet.result.properties.population}</li>
                  <li> <strong>Diameter</strong>: {planet.result.properties.diameter}</li>
                  <li> <strong>Climate</strong>: {planet.result.properties.climate}</li>
                  <li> <strong>Terrain</strong>: {planet.result.properties.terrain}</li>
                  <li> <strong>Gravity</strong>: {planet.result.properties.gravity}</li>
                </ul>
              </div>
            </div>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
};

export default PlanetsDetails;
