const baseUrl = 'https://api.punkapi.com/v2/'

export async function fetchRandomBeer() {
  const url = `${baseUrl}beers/random`
  try {
    const response = await fetch(url)
    return (await response.json())[0]
  } catch (error) {
    console.log(error)
  }
}

export async function fetchAllBeers() {
  const url = `${baseUrl}beers`;
  try {
    const response = await fetch(url);
    return (await response.json())
  } catch (err) {
    console.log(err)
  }
}
