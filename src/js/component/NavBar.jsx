import React, { useContext } from "react";
import { Context } from "../store/appContext";

const NavBar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar bg bg-dark">
      <div className="container-fluid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/100px-Star_Wars_Logo.svg.png"></img>

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            New Favorite
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((item) => {
              return (
                <li key={item.result.uid} className="dropdown-item">
                  {item.result.properties.name}

                  <button
                    type="button"
                    className="btn btn-outline-danger mx-2"
                    onClick={() => removeFavorite(element)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </li>

              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
