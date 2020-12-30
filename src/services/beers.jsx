const baseUrl = 'https://api.punkapi.com/v2';

export async function fetchRandomBeer() {
  const url = `${baseUrl}/beers/random`;
  try {
    const response = await fetch(url);
    const beer = (await response.json())[0];
    const { id, image_url: img, name, description, ibu, abv } = beer;
    return { id, img, name, description, ibu, abv };
  } catch (error) {
    console.log(error);
  }
  return false;
}

function convertBeer(beerToConvert) {
  const {
    name,
    id,
    description,
    ibu,
    ebc,
    image_url: img,
    first_brewed: brewed,
    tagline,
    food_pairing: food,
    abv,
  } = beerToConvert;
  return {
    name,
    id,
    description,
    ibu,
    ebc,
    img,
    brewed,
    food,
    tagline,
    abv,
  };
}

export async function fetchBeersWithIds(param) {
  const url = `${baseUrl}/beers?ids=${param}`;
  try {
    const response = await fetch(url);
    const beers = await response.json();
    return beers.map(convertBeer);
  } catch (error) {
    console.log(error);
  }
  return false;
}

export async function fetchBeers(params, pageNumber, beersPerPage) {
  const url = `${baseUrl}/beers?page=${pageNumber}&per_page=${beersPerPage}&${params
    .filter((param) => !!param)
    .join('&')}`;
  try {
    const response = await fetch(url);
    const beers = await response.json();
    return beers.map(convertBeer);
  } catch (error) {
    console.log(error);
  }
  return false;
}
