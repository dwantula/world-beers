const baseUrl = 'https://api.punkapi.com/v2';

export async function fetchRandomBeer() {
  const url = `${baseUrl}/beers/random`;
  try {
    const response = await fetch(url)
    const beer = (await response.json())[0]
    const { id, image_url: img, name, description, ibu, abv } = beer;
    return ({ id, img, name, description, ibu, abv })
  } catch (error) {
    console.log(error)
  };
};

export async function fetchBeers(param) {
  const url = `${baseUrl}/beers?${param.filter(String).join('&')}`
  try {
    const response = await fetch(url);
    const beers = (await response.json())
    return beers.map(
      ({ id,
        description,
        name,
        abv,
        ibu,
        ebc,
        image_url: img,
        tagline,
        first_brewed: brewed,
        food_pairing: food
      }) => ({
        id,
        description,
        ibu,
        abv,
        name,
        ebc,
        tagline,
        img,
        food,
        brewed
      })
    )
  } catch (error) {
    console.log(error)
  };
};
