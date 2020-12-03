import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

function SearchBeersComponent() {

  const [beers, setBeers] = useState([])
  const [params, setParams] = useState({
    alcoholVolume: '',
    id: '',
    ibuRange: '',
    colorOfBeer: '',
    brewedBefore: '',
    food: '',
    yeast: '',
    hops: '',
    malt: '',
    beerName: '',
  });

  function handleChange(event) {

    const { name, value } = event.target;
    setParams(prevParams => (
      { prevParams, [name]: value })
    );
  };

  async function getBeers() {
    const beers = await fetchBeers([params.alcoholVolume, params.ibuRange, params.colorOfBeer, params.brewedBefore, params.food, params.yeast, params.hops, params.malt]);
    setBeers(beers);
  };

  async function getBeersByName() {
    const beers = await fetchBeers([`beer_name=${params.beerName}`]) || [];
    setBeers(beers);
  };

  function addToFavorites(id) {
    const storedBeers = getItemFromLocalStorage('beers');
    const allBeers = beers.find(elem => elem.id === id);
    const newBeer = [...storedBeers, allBeers];
    saveItemInLocalStorage('beers', newBeer);
  };

  const { register, handleSubmit, errors } = useForm();

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
          onChange={handleChange}
          className="select"
          name="alcoholVolume"
          value={params.alcoholVolume}
          options={alcohollVolumeOptions}
          placeholder="choose Alcohol Volume"
        />
        <SelectComponent
          onChange={handleChange}
          className="select"
          name="ibuRange"
          value={params.ibuRange}
          options={ibuOptions}
          placeholder="choose IBU range"
        />
        <SelectComponent
          onChange={handleChange}
          className="select"
          name="colorOfBeer"
          value={params.colorOfBeer}
          options={ebcOptions}
          placeholder="choose EBC beers"
        />
        <SelectComponent
          onChange={handleChange}
          className="select"
          name="brewedBefore"
          value={params.brewedBefore}
          options={brewedOptions}
          placeholder="choose date before brewed"
        />
        <SelectComponent
          onChange={handleChange}
          className="select"
          name="food"
          value={params.food}
          options={foodOptions}
          placeholder="choose food paring"
        />
        <SelectComponent
          onChange={handleChange}
          className="select"
          name="yeast"
          value={params.yeast}
          options={yeastOptions}
          placeholder="choose yeast"
        />
        <SelectComponent
          onChange={handleChange}
          className="select"
          name="hops"
          value={params.hops}
          options={hopsOptions}
          placeholder="choose hops"
        />
        <SelectComponent
          onChange={handleChange}
          className="select"
          name="malt"
          value={params.malt}
          options={maltOptions}
          placeholder="choose malt"
        />
        <Button
          className="button-search"
          onClick={getBeers}
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
          onChange={handleChange}
          placeholder="Write name of beer"
          register={register({ required: true, minLength: 2 })}
        />
        {errors.beerName && <p className="errors">This is field required min length of 2 to 12 </p>}
        <Button
          type="button"
          text="search"
          onClick={handleSubmit(getBeersByName)}
        />
      </div>
      {
        beers.map(({ name, abv, description, id, brewed, tagline, ibu, food, img, ebc }) => (
          <div className="beers-list" key={id}>
            <FavouriteButton
              onClick={() => addToFavorites(id)}
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
    </div >
  );
};

export default SearchBeersComponent;
