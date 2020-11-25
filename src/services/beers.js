const baseUrl = 'https://api.punkapi.com/v2'

export async function fetchRandomBeer() {
  const url = `${baseUrl}/beers/random`
  try {
    const response = await fetch(url)
    return (await response.json())[0]
  } catch (error) {
    console.log(error)
  }
}

export async function fetchBeers(param) {
  const url = `${baseUrl}/beers?${param}`;
  try {
    const response = await fetch(url);
    return (await response.json())
  } catch (error) {
    console.log(error)
  }
}
