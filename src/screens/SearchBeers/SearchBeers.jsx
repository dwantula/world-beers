import React, { PureComponent } from 'react';
import { fetchBeers } from '../../services/beers';
import Button from '../../shared/components/Button/Button';
import Beer from '../../shared/components/Beer/Beer';
import './styles.scss';
import Heading from '../../shared/components/Heading/Heading';
import SelectComponent from '../../shared/components/Select/Select';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import InputComponent from '../../shared/components/Input/Input';
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
    value: "food=chicken"
  },
  {
    label: "Burger",
    value: "food=burger"
  },
  {
    label: "Salad",
    value: "food=salad"
  },
  {
    label: "Pasta",
    value: "food=pasta"
  },
  {
    label: "Fish",
    value: "food=fish"
  },
  {
    label: "Beef",
    value: "food=beef"
  },
]

const yeastOptions = [
  {
    label: 'Pilsen Lager',
    value: 'yeast=pilsen_lager'
  },
  {
    label: 'American Ale',
    value: 'yeast=american_ale'
  },
  {
    label: 'Belgian Ardennes',
    value: 'yeast=belgian_ardennes'
  },
  {
    label: 'French Saison',
    value: 'yeast=french_saison'
  }
]

const hopsOptions = [
  {
    label: 'Fuggles',
    value: 'hops=fuggles'
  },
  {
    label: 'First Gold',
    value: 'hops=first_gold'
  },
  {
    label: 'Simcoe',
    value: 'hops=simcoe'
  },
  {
    label: 'Amarillo',
    value: 'hops=amarillo'
  }
]

const maltOptions = [
  {
    label: 'Caramalt',
    value: 'malt=caramalt'
  },
  {
    label: 'Munich',
    value: 'malt=munich'
  },
  {
    label: 'Extra Pale',
    value: 'malt=extra_pale'
  }
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
      beerName: '',
      yeast: '',
      hops: '',
      malt: '',
    };
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBeers = async () => {
    const { alcoholVolume, ibuRange, colorOfBeer, brewedBefore, food, yeast, hops, malt } = this.state;
    const beers = await fetchBeers([alcoholVolume, ibuRange, colorOfBeer, brewedBefore, food, yeast, hops, malt]);
    this.setState({ beers });
  };

  getBeerByName = async () => {
    const { beerName } = this.state
    const beers = await fetchBeers([`beer_name=${beerName}`]);
    this.setState({ beers })
  }

  addToFavorites = id => {
    const beers = getItemFromLocalStorage('beers') || [];
    const beer = this.state.beers.find(elem => elem.id === id);
    const addBeer = [...beers, beer];
    saveItemInLocalStorage('beers', addBeer);
  };

  render() {
    const { beers, alcoholVolume, ibuRange, colorOfBeer, brewedBefore, food, beerName, yeast, hops, malt } = this.state;
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
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="yeast"
            value={yeast}
            options={yeastOptions}
            placeholder="choose yeast"
          />
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="hops"
            value={hops}
            options={hopsOptions}
            placeholder="choose hops"
          />
          <SelectComponent
            onChange={this.handleChange}
            className="select"
            name="malt"
            value={malt}
            options={maltOptions}
            placeholder="choose malt"
          />
          <Button
            className="button-search"
            onClick={this.getBeers}
            text="Find beers"
          />
        </div>
        <div className="form">
          <Heading
            text="Search beer"
            type="h4"
          />
          <InputComponent
            name="beerName"
            onChange={this.handleChange}
            value={beerName}
            placeholder="Write name of beer"
          />
          <Button
            text="search"
            onClick={this.getBeerByName}
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
