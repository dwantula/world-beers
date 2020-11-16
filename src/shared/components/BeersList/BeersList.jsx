import './styles.scss';

const BeersList = props => {
  const beers = props.beers;
  return ( 
    <ul>
      {beers.map(beer=> (
        <div key={beer.id}>
          <h2>{`Name beer: ${beer.name}`}</h2>
          <h4 className="all-list-beers">{`Description: ${beer.description}`}</h4>
          <h4 className="all-list-beers">{`alcohol vol: ${beer.abv}%`}</h4>
        </div>
      ))}
    </ul>
  );
}
 
export default BeersList;