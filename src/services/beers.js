const baseUrl = 'https://api.punkapi.com/v2';

export async function fetchRandomBeer() {
  const url = `${baseUrl}/beers/random`;
  try {
    const response = await fetch(url)
    const beer = (await response.json())[0];
    const { id, image_url: img, name, description, ibu, abv } = beer;
    return ({ id, img, name, description, ibu, abv })
  } catch (error) {
    console.log(error)
  };
};

function convertBeer(beerToConvert) {
  const { name, id, description, ibu, ebc, image_url, first_brewed, tagline, food_pairing, abv } = beerToConvert;
  return {
    name,
    id,
    description,
    ibu,
    ebc,
    img: image_url,
    brewed: first_brewed,
    food: food_pairing,
    tagline,
    abv
  }
}

export async function fetchBeersWithIds(param) {
  const url = `${baseUrl}/beers?ids=${param}`
  try {
    const response = await fetch(url);
    const beers = (await response.json())
    return beers.map(convertBeer)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchBeers(params, pageNumber, beersPerPage) {
  const url = `${baseUrl}/beers?page=${pageNumber}&per_page=${beersPerPage}&${params.filter(param => !!param).join('&')}`
  try {
    const response = await fetch(url)
    const beers = (await response.json())
    return beers.map(convertBeer)
  } catch (error) {
    console.log(error)
  };
};

