import './styles.scss';

const ButtonFetchBeers = props => {
  return ( 
    <div>
      <button className="button-seartch" onClick={props.click}>Find beers</button>
    </div>
   );
}
 
export default ButtonFetchBeers;