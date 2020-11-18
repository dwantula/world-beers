import './styles.scss';

const BeersList = props => {
  const beers = props.beers;
  
  return ( 
    <ul>
      {beers.map(beer => (
        <div className="search-beer" key={beer.id}>
          <h2>{`Name beer: ${beer.name}`}</h2>
          <h4 className="all-list-beers">{`Description: ${beer.description}`}</h4>
          <h4 className="all-list-beers">{`Food pairing: ${beer.food_pairing}`}</h4>
          <h4 className="all-list-beers">{`alcohol vol: ${beer.abv}%`}</h4>
          <h4 className="all-list-beers">{`IBU: ${beer.ibu}`}</h4>
          <div className="row">
          <img className="img" src={beer.image_url} alt="beer"></img>
          </div>
      </div>
      ))}
    </ul>
  );
}
 
export default BeersList;