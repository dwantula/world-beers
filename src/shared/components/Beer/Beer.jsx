import './styles.scss';
const Beer = ({ tagline, ebc, name, abv, description, img, ibu }) => {
  return (
    <div className="beer">
      <p>{img && <img className="img" src={img} alt="beer"></img>}</p>
      <h3 className="text-beer">{`Beer's name: ${name}`}</h3>
      <p className="text-beer">{`Tagline: ${tagline}`}</p>
      <p className="text-beer">{`ABV: ${abv}%`}</p>
      <p className="text-beer">{`IBU: ${ibu}`}</p>
      <p className="text-beer">{`EBC: ${ebc}`}</p>
      <p className="text-beer">{`Description: ${description}`}</p>
    </div>
  )
}

export default Beer;

