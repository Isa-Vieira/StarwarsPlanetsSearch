const starWarsApi = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=2');
  const data = await response.json();
  return data.results;
};
export default starWarsApi;
