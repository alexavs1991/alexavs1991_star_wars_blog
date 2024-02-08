import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const VehiclesDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const vehicle = store.vehicles.find((item) => item.result.uid == params.id);


  return (
   
    <div className="container card mb-5 mt-5 bg bg-dark">
      {store.vehicles ? (
          <div className="row">
            <div className="col-md-4 p-4 mb-5 mt-5">
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold fs-1 text-white">{vehicle.result.properties.name}</h5>
                <ul id="details" className="card-text justify-content-center fs-4 text-white p-5">
                  <li> <strong>Model</strong>: {vehicle.result.properties.model}</li>
                  <li> <strong>Vehicle Class</strong>: {vehicle.result.properties.vehicle_class}</li>
                  <li> <strong>Crew</strong>: {vehicle.result.properties.crew}</li>
                  <li> <strong>Passanger</strong>: {vehicle.result.properties.passengers}</li>
                  <li> <strong>Cargo Cpacity</strong>: {vehicle.result.properties.cargo_capacity}</li>
                  <li> <strong>Manufacture</strong>: {vehicle.result.properties.manufacturer}</li>
                
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

export default VehiclesDetails;