import './styles.scss';
 
const Beer = props => {
  return ( 
    <div className="favourite-card">
      <div className="column">
        <h2 className="name-beer">{`Beer's name: ${props.name}`}</h2>
        <h4 className="favourite-beer">{`ABV: ${props.abv}%`}</h4>
        <h4 className="favourite-beer">{`Description: ${props.description}`}</h4>
      </div>
      <img className="img" src={props.img} alt="beer"></img>
    </div>
  )
}
 
export default Beer;

