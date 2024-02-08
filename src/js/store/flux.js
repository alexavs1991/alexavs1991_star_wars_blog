import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      endpoint: "https://www.swapi.tech/api/",
      favorites: [],
      characters: [],
      planets: [],
      vehicles: [],
    },
    actions: {
      getAllInfo: async (endpoint, key) => {
        const localData = localStorage.getItem(key);
        if (localData) {
          setStore({ [key]: JSON.parse(localData) });
          return;
        }
        const store = getStore();
        const response = await fetch(store.endpoint + endpoint);
        const data = await response.json();
        const infoData = [];
        for (let item of data.results) {
          const dataResponse = await fetch(item.url);
          const dataResults = await dataResponse.json();
          infoData.push(dataResults);
          console.log(dataResults);
        }
        console.log(infoData);
        setStore({ [key]: infoData });
        localStorage.setItem(key, JSON.stringify(infoData));
      },

      addFavorite: (element) => {
        const store = getStore();
        if (
          store.favorites.find((item) => item.result._id === element.result._id)
        ) {
          return;
        }
        const newFavorite = [...store.favorites, element];
        setStore({ favorites: newFavorite });
      },

      removeFavorite: (element) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter((item) => item.result._id !== element.result._id);
        store.favorites = updatedFavorites;
        updateStore(store);
    }
    },
  };
};

export default getState;
