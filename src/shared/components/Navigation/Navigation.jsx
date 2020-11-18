import './styles.scss';

const NavigationComponent = ({ pages, onLinkClick }) => {
  return (
    <nav className="nav"> 
      {pages.map(({ id, label, component }) => (
        <button className="links-button" key={id} onClick={() => onLinkClick(component)}>
          {label}
        </button>
      ))}
    </nav>
  )
}

export default NavigationComponent