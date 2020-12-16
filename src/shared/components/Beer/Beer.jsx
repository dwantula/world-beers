import './styles.scss';
import PropTypes from 'prop-types';
const Beer = ({ food, brewed, tagline, ebc, name, abv, description, img, ibu }) => {
  return (
    <div className="beer-card">
      <div className="beer-img">
        <p>{img ? <img className="img" src={img} alt="beer"></img> : <span className="no-photo">No photo</span>}</p>
      </div>
      <div className="beer-text">
        <h3 className="text-beer">{`Beer's name: ${name}`}</h3>
        <p>{tagline && <span className="text-beer">{`Tagline: ${tagline}`}</span>}</p>
        <p>{brewed && <span className="text-beer">{`First brewed: ${brewed}`}</span>}</p>
        <p>{food && <span className="text-beer">{`Food: ${food}`}</span>}</p>
        <p className="text-beer">{`ABV: ${abv}%`}</p>
        <p className="text-beer">{`IBU: ${ibu}`}</p>
        <p>{ebc && <span className="text-beer">{`EBC: ${ebc}`}</span>}</p>
        <p className="text-beer">{`Description: ${description}`}</p>
      </div>
    </div >
  );
};

Beer.propTypes = {
  food: PropTypes.array,
  brewed: PropTypes.string,
  tagline: PropTypes.string,
  ebc: PropTypes.number,
  name: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  ibu: PropTypes.number,
}

export default Beer;

