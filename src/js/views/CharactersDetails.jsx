import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const CharactersDetails = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const character = store.characters.find((item) => item.result.uid == params.id);


  return (
   
    <div className="container card mb-5 mt-5 bg bg-dark">
      {store.characters ? (
          <div className="row">
            <div className="col-md-4 p-4 mb-5 mt-5">
              <img src={`https://starwars-visualguide.com/assets/img/characters/${character.result.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold fs-1 text-white">{character.result.properties.name}</h5>
                <ul id="details" className="card-text justify-content-center fs-4 text-white p-5">
                  <li> <strong>Birth day</strong>: {character.result.properties.birth_year}</li>
                  <li> <strong>Eye Color</strong>: {character.result.properties.eye_color}</li>
                  <li> <strong>Gender</strong>: {character.result.properties.gender}</li>
                  <li> <strong>Hair Color</strong>: {character.result.properties.hair_color}</li>
                  <li> <strong>Height</strong>: {character.result.properties.height}</li>
                  <li> <strong>Mass</strong>: {character.result.properties.mass}</li>
                  <li> <strong >Skin Color</strong>: {character.result.properties.skin_color}</li>
                  
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

export default CharactersDetails;
