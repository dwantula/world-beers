import React, { PureComponent } from 'react';
import { fetchBeers } from '../../services/beers';
import Button from '../../shared/components/Button/Button';
import Beer from '../../shared/components/Beer/Beer';
import './styles.scss';
import Heading from '../../shared/components/Heading/Heading';
import SelectComponent from '../../shared/components/Select/Select';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import { getItemFromLocalStorage, saveItemInLocalStorage } from '../../services/localStorage';

class SearchBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      alcoholVolume: '',
      ibuRange: '',
      colorOfBeer: ''
    }
  }


  addToFavorites = id => {
    const beers = getItemFromLocalStorage('beers') || [];
    const beer = this.state.beers.find(elem => elem.id === id);
    const addBeer = [...beers, beer]
    saveItemInLocalStorage('beers', addBeer)
  }

  render() {
    const { beers } = this.state;
    return (
      <div className="search-page">
        <Heading
          type="h3"
          className="title-search"
          text='Find Beers'
        />
        <Heading
          text="Filter"
          type="h4"
        />
        <SelectComponent />
        <Button
          className="button-search"
          onClick={this.getBeers}
          text="Find beers"
        />
        {
          beers.map(({ tagline, ebc, id, name, abv, image_url: img, description, ibu }) => (
            <div className="beers-list" key={id}>
              <FavouriteButton
                onClick={() => this.addToFavorites(id)}
              />
              <Beer
                name={name}
                abv={abv}
                img={img}
                description={description}
                ibu={ibu}
                ebc={ebc}
                tagline={tagline} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default SearchBeersComponent;





// import React, { PureComponent } from 'react';
// import { fetchBeers } from '../../services/beers';
// import Button from '../../shared/components/Button/Button';
// import Beer from '../../shared/components/Beer/Beer';
// import './styles.scss';
// import Heading from '../../shared/components/Heading/Heading';
// import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
// import { getItemFromLocalStorage, saveItemInLocalStorage } from '../../services/localStorage';

// class SearchBeersComponent extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       beers: [],
//       alcoholVolume: '',
//       ibuRange: '',
//       colorOfBeer: ''
//     }
//   }

//   handleChange = event => {
//     this.setState({
//       alcoholVolume: event.target.value,
//       ibuRange: event.target.value,
//       colorOfBeer: event.target.value,
//     })
//   }

//   getBeers = async () => {
//     const { alcoholVolume, ibuRange, colorOfBeer } = this.state
//     const beers = await fetchBeers(alcoholVolume, ibuRange, colorOfBeer)
//     this.setState({ beers })

//   }

//   addToFavorites = id => {
//     const beers = getItemFromLocalStorage('beers') || [];
//     const beer = this.state.beers.find(elem => elem.id === id);
//     const addBeer = [...beers, beer]
//     saveItemInLocalStorage('beers', addBeer)
//   }

//   render() {
//     const { beers } = this.state;
//     return (
//       <div className="search-page">
//         <Heading
//           type="h3"
//           className="title-search"
//           text='Find Beers'
//         />
//         <Heading
//           text="Filter"
//           type="h4"
//         />
//         <div className="filter-select">
//           <select className="option" onChange={this.handleChange}>
//             <option>Choose alcohol volume</option>
//             <option value="abv_lt=4.5">less than 4,5 %</option>
//             <option value="abv_gt=4.5">more than 4,5 %</option>
//           </select>
//           <select className="option" onChange={this.handleChange} >
//             <option>IBU </option>
//             <option value="ibu_lt=60">less than 60</option>
//             <option value="ibu_gt=60">more than 60</option>
//           </select>
//           <select className="option" onChange={this.handleChange} >
//             <option>EBC </option>
//             <option value="ebc_lt=60">less than 60</option>
//             <option value="ebc_gt=60">more than 60</option>
//           </select>
//           <Button onClick={this.getBeers} text="Search" />
//         </div>
//         <Button
//           className="button-search"
//           onClick={this.getBeers}
//           text="Find beers"
//         />
//         {
//           beers.map(({ tagline, ebc, id, name, abv, image_url: img, description, ibu }) => (
//             <div className="beers-list" key={id}>
//               <FavouriteButton
//                 onClick={() => this.addToFavorites(id)}
//               />
//               <Beer
//                 name={name}
//                 abv={abv}
//                 img={img}
//                 description={description}
//                 ibu={ibu}
//                 ebc={ebc}
//                 tagline={tagline} />
//             </div>
//           ))
//         }
//       </div>
//     )
//   }
// }

// export default SearchBeersComponent;
