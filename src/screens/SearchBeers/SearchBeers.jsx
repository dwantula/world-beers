import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchBeers, fetchBeersName } from '../../services/beers';
import Button from '../../shared/components/Button/Button';
import Beer from '../../shared/components/Beer/Beer';
import './styles.scss';
import Heading from '../../shared/components/Heading/Heading';
import SelectComponent from '../../shared/components/Select/Select';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import InputComponent from '../../shared/components/Input/Input';
import { render } from '@testing-library/react';

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

const beersPerPageOptions = [
  {
    label: '5',
    value: 5
  },
  {
    label: '10',
    value: 10
  },
  {
    label: '15',
    value: 15
  }
]

function SearchBeersComponent() {
  const { register, handleSubmit, errors } = useForm();

  const [beersPerPage, setBeersPerPage] = useState(5)
  const [beers, setBeers] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [paramsToPass, setParamsToPass] = useState('');
  const [beerName, setBeerName] = useState('')
  const [params, setParams] = useState({
    alcoholVolume: '',
    ibuRange: '',
    colorOfBeer: '',
    brewedBefore: '',
    food: '',
    yeast: '',
    hops: '',
    malt: '',
  });

  function handleParamChange(event) {
    const { name, value } = event.target;
    setParams(prevParams => (
      { ...prevParams, [name]: value }
    ))
  };

  function handleNameChange(event) {
    setBeerName(event.target.value)
  }

  function handleBeersPerPageChange(event) {
    setBeersPerPage(event.target.value)
  }

  async function getBeers(queryParams, page) {
    const beers = await fetchBeers(queryParams, page, beersPerPage);
    setBeers(beers);
  };

  function findBeers() {
    const queryParams = Object.values(params);
    getBeers(queryParams, 1);
    setPageNumber(1);
    setParamsToPass('params')
  }

  function displayBeersPerPage() {
    setBeersPerPage(beersPerPage)
    const queryParams = getQueryParams();
    getBeers(queryParams, 1, beersPerPage)
    scroolToTop()
  }

  async function getBeersByName() {
    const queryParams = [`beer_name=${beerName}`];
    getBeers(queryParams, 1);
    setPageNumber(1);
    setParamsToPass('beerName');
  };

  function getNextPageBeers() {
    const nextPage = pageNumber + 1;
    const queryParams = getQueryParams();
    getBeers(queryParams, nextPage)
    setPageNumber(nextPage);
    scroolToTop()
  }

  function getPreviousPageBeers() {
    const previousPage = pageNumber - 1;
    const queryParams = getQueryParams();
    getBeers(queryParams, previousPage)
    setPageNumber(previousPage);
    scroolToTop()
  }

  function getQueryParams() {
    return paramsToPass === 'beerName'
      ? [`beer_name=${beerName}`]
      : Object.values(params);
  }

  function scroolToTop() {
    window.scrollTo(0, 0)
  }
  console.log(pageNumber)
  return (
    < div className="search-page" >
      <Heading
        type="h1"
        className="title-search"
        text='Find Beers'
      />
      <div className="conteiner">
        <Heading
          text="Search beer"
          type="h2"
        />
        <InputComponent
          name="beerName"
          onChange={handleNameChange}
          placeholder="Write name of beer"
          className="input"
          register={register({ required: true, minLength: 2 })}
        />
        <div className="form">
          <Button
            className="search-button"
            type="button"
            text="search"
            onClick={handleSubmit(getBeersByName)}
          />
        </div>
        {errors.beerName && <p className="errors">This is field required min length of 2 to 12 </p>}
        <Heading
          text="Filter"
          type="h2"
          className="filter"
        />
        <div className="select-component">
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="alcoholVolume"
            value={params.alcoholVolume}
            options={alcohollVolumeOptions}
            placeholder="choose Alcohol Volume"
          />
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="ibuRange"
            value={params.ibuRange}
            options={ibuOptions}
            placeholder="choose IBU range"
          />
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="colorOfBeer"
            value={params.colorOfBeer}
            options={ebcOptions}
            placeholder="choose EBC beers"
          />
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="brewedBefore"
            value={params.brewedBefore}
            options={brewedOptions}
            placeholder="choose date before brewed"
          />
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="food"
            value={params.food}
            options={foodOptions}
            placeholder="choose food paring"
          />
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="yeast"
            value={params.yeast}
            options={yeastOptions}
            placeholder="choose yeast"
          />
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="hops"
            value={params.hops}
            options={hopsOptions}
            placeholder="choose hops"
          />
          <SelectComponent
            onChange={handleParamChange}
            className="select"
            name="malt"
            value={params.malt}
            options={maltOptions}
            placeholder="choose malt"
          />
        </div>
      </div>
      <Button
        className="button-search"
        onClick={findBeers}
        text="Find beers"
      />
      {
        beers.map(({ name, abv, description, id, brewed, tagline, ibu, food, img, ebc }) => (
          <div className="beers-list" key={id}>
            <FavouriteButton beerId={id} />
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
      <div className="beers-per-page">
        <SelectComponent
          onChange={handleBeersPerPageChange}
          className="beers-per-page-select"
          name="beersPerPage"
          value={beersPerPage}
          options={beersPerPageOptions}
        />
        <Button text="Change beers per page" onClick={displayBeersPerPage} />
      </div>
      <div className="navigation-button">
        {pageNumber !== 1 && <Button className="prevous-button" onClick={getPreviousPageBeers} text="Previous page" />}
        {beers.length === beersPerPage && <Button className="next-button" onClick={getNextPageBeers} text="Next page" />}
      </div>
    </div >
  );
};

export default SearchBeersComponent;