import './styles.scss';
import PropTypes from 'prop-types';

const NavigationComponent = ({ pages, onLinkClick }) => {
  return (
    <nav className="nav">
      {pages.map(({ id, label, component }) => (
        <button className="links-button" key={id} onClick={() => onLinkClick(component)}>
          {label}
        </button>
      ))}
    </nav>
  );
};

NavigationComponent.propTypes = {
  pages: PropTypes.array.isRequired,
  onLinkClick: PropTypes.func.isRequired
}

export default NavigationComponent;