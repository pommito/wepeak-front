import {
  FETCH_CITIES_SEARCH,
  HANDLE_FETCH_CITIES_SEARCH_BIS,
  handleFetchCitiesSearch,
  handleFetchCitiesSearchBis,
} from '../actions/searchActions';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CITIES_SEARCH: {
      const inputSearch = store.getState().search.input;

      fetch(
        `https://secure.geonames.org/postalCodeSearchJSON?placename_startsWith=${inputSearch}&country=FR&username=pommito`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          store.dispatch(handleFetchCitiesSearch(data));
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          );
        })
        .finally(() => {});
      break;
    }
    case HANDLE_FETCH_CITIES_SEARCH_BIS: {
      const inputSearch = store.getState().search.searchedCity.name;
      console.log(inputSearch);

      fetch(
        `https://secure.geonames.org/postalCodeSearchJSON?placename_startsWith=${inputSearch}&country=FR&username=pommito`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          store.dispatch(handleFetchCitiesSearchBis(data));
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          );
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default searchMiddleware;
