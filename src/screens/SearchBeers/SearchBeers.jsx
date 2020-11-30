import React, { PureComponent } from 'react';
import { fetchBeers } from '../../services/beers';
import Button from '../../shared/components/Button/Button';
import Beer from '../../shared/components/Beer/Beer';
import './styles.scss';
import Heading from '../../shared/components/Heading/Heading';
import SelectComponent from '../../shared/components/Select/Select';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import { getItemFromLocalStorage, saveItemInLocalStorage } from '../../services/localStorage';

const alcohollVolumeOptions = [
  {
    label: "more than 4,5%",
    value: "abv_gt=4.5",
  },
  {
    label: "less than 4,5%",
    value: "abv_lt=4.5",
  },
]

const ibuOptions = [
  {
    label: "less than 60",
    value: "ibu_lt=60",
  },
  {
    label: "more than 60",
    value: "ibu_gt=60",
  },
]

const ebcOptions = [
  {
    label: "less than 60",
    value: "ebc_lt=60",
  },
  {
    label: "more than 60",
    value: "ebc_gt=60",
  },
]

const brewedOptions = [
  {
    label: "less 11-2008",
    value: "brewed_before=11-2008"
  },
  {
    label: "less 10-2012",
    value: "brewed_before=10-2012"
  },
  {
    label: "less 10-2017",
    value: "brewed_before=10-2017"
  },
]

const foodOptions = [
  {
    label: "Chicken",
    value: "food=Chicken"
  },
  {
    label: "Burger",
    value: "food=Burger"
  },
  {
    label: "Salad",
    value: "food=Salad"
  },
  {
    label: "Pasta",
    value: "food=Pasta"
  },
  {
    label: "Fish",
    value: "food=Fish"
  },
  {
    label: "Beef",
    value: "food=Beef"
  },
]

class SearchBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      alcoholVolume: '',
      ibuRange: '',
      colorOfBeer: '',
      brewedBefore: '',
      food: '',
    };
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBeers = async () => {
    const { alcoholVolume, ibuRange, colorOfBeer, brewedBefore, food, } = this.state;
    const beers = await fetchBeers([alcoholVolume, ibuRange, colorOfBeer, brewedBefore, food,])
    this.setState({ beers });
  };

  addToFavorites = id => {
    const beers = getItemFromLocalStorage('beers') || [];
    const beer = this.state.beers.find(elem => elem.id === id);
    const addBeer = [...beers, beer];
    saveItemInLocalStorage('beers', addBeer);
  };

  render() {
    const { beers, alcoholVolume, ibuRange, colorOfBeer, brewedBefore, food } = this.state;
    return (
      <div className="search-page">
        <Heading
          type="h1"
          className="title-search"
          text='Find Beers'
        />
        <Heading
          text="Filter"
          type="h4"
          className="filter"
        />
        <div className="select-component">
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="alcoholVolume"
            value={alcoholVolume}
            options={alcohollVolumeOptions}
            placeholder="choose Alcohol Volume"
          />
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="ibuRange"
            value={ibuRange}
            options={ibuOptions}
            placeholder="choose IBU range"
          />
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="colorOfBeer"
            value={colorOfBeer}
            options={ebcOptions}
            placeholder="choose EBC beers"
          />
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="brewedBefore"
            value={brewedBefore}
            options={brewedOptions}
            placeholder="choose date before brewed"
          />
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="food"
            value={food}
            options={foodOptions}
            placeholder="choose food paring"
          />
          <Button
            className="button-search"
            onClick={this.getBeers}
            text="Find beers"
          />
        </div>
        {
          beers.map(({ brewed, food, tagline, ebc, id, name, abv, img, description, ibu }) => (
            <div className="beers-list" key={id}>
              <FavouriteButton
                onClick={() => this.addToFavorites(id)}
              />
              <Beer
                name={name}
                abv={abv}
                img={img}
                brewed={brewed}
                food={food}
                description={description}
                ibu={ibu}
                ebc={ebc}
                tagline={tagline} />
            </div>
          ))
        }
      </div>
    );
  };
};

export default SearchBeersComponent;
