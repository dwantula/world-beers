import './styles.scss';

 const Beer = ({ name, abv, description, img })  => {
  return ( 
    <div className="beer">
      <p className="text-beer">{`Beer's name: ${name}`}</p>
        <p className="text-beer">{`ABV: ${abv}%`}</p>
        <p className="text-beer">{`Description: ${description}`}</p>
        <p>{img && <img className="img" src={img} alt="beer"></img>}</p>
    </div>
  )
}
 
export default Beer;

