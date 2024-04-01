export const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH';
export const FETCH_CITIES_SEARCH = 'FETCH_CITIES_SEARCH';
export const HANDLE_FETCH_CITIES_SEARCH = 'HANDLE_FETCH_CITIES_SEARCH';

export const changeInputSearch = (input) => ({
  type: CHANGE_INPUT_SEARCH,
  input,
});

export const fetchCitiesSearch = () => ({
  type: FETCH_CITIES_SEARCH,
});

export const handleFetchCitiesSearch = (data) => {
  // transform data to remove duplicates in coordinates and keep only postalCode and placeName in objects
  const cityList = data.postalCodes.reduce((acc, fetchResult) => {
    // Check if coordinates of the current fetchResult are already in the accumulator
    const isDuplicate = acc.find(
      (stockedResult) =>
        stockedResult.lat === fetchResult.lat &&
        stockedResult.lng === fetchResult.lng
    );
    // If not, we add a new object with postalCode and placeName in the accumulator
    if (!isDuplicate) {
      acc.push({
        postalCode: fetchResult.postalCode,
        placeName: fetchResult.placeName,
        lat: fetchResult.lat,
        lng: fetchResult.lng,
      });
    }
    return acc;
  }, []);
  return {
    type: HANDLE_FETCH_CITIES_SEARCH,
    cityList,
  };
};
