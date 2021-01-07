import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { fetchBeers } from '../../services/beers';
import Button from '../../shared/components/Button/Button';
import Beer from '../../shared/components/Beer/Beer';
import Spinner from '../../shared/components/Spinner/Spinner';
import './styles.scss';
import Heading from '../../shared/components/Heading/Heading';
import SelectComponent from '../../shared/components/Select/Select';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import InputComponent from '../../shared/components/Input/Input';

const alcohollVolumeOptions = [
  {
    label: 'more than 4,5%',
    value: 'abv_gt=4.5',
  },
  {
    label: 'less than 4,5%',
    value: 'abv_lt=4.5',
  },
];

const ibuOptions = [
  {
    label: 'less than 60',
    value: 'ibu_lt=60',
  },
  {
    label: 'more than 60',
    value: 'ibu_gt=60',
  },
];

const ebcOptions = [
  {
    label: 'less than 60',
    value: 'ebc_lt=60',
  },
  {
    label: 'more than 60',
    value: 'ebc_gt=60',
  },
];

const brewedOptions = [
  {
    label: 'less 11-2008',
    value: 'brewed_before=11-2008',
  },
  {
    label: 'less 10-2012',
    value: 'brewed_before=10-2012',
  },
  {
    label: 'less 10-2017',
    value: 'brewed_before=10-2017',
  },
];

const foodOptions = [
  {
    label: 'Chicken',
    value: 'food=chicken',
  },
  {
    label: 'Burger',
    value: 'food=burger',
  },
  {
    label: 'Salad',
    value: 'food=salad',
  },
  {
    label: 'Pasta',
    value: 'food=pasta',
  },
  {
    label: 'Fish',
    value: 'food=fish',
  },
  {
    label: 'Beef',
    value: 'food=beef',
  },
];

const yeastOptions = [
  {
    label: 'Pilsen Lager',
    value: 'yeast=pilsen_lager',
  },
  {
    label: 'American Ale',
    value: 'yeast=american_ale',
  },
  {
    label: 'Belgian Ardennes',
    value: 'yeast=belgian_ardennes',
  },
  {
    label: 'French Saison',
    value: 'yeast=french_saison',
  },
];

const hopsOptions = [
  {
    label: 'Fuggles',
    value: 'hops=fuggles',
  },
  {
    label: 'First Gold',
    value: 'hops=first_gold',
  },
  {
    label: 'Simcoe',
    value: 'hops=simcoe',
  },
  {
    label: 'Amarillo',
    value: 'hops=amarillo',
  },
];

const maltOptions = [
  {
    label: 'Caramalt',
    value: 'malt=caramalt',
  },
  {
    label: 'Munich',
    value: 'malt=munich',
  },
  {
    label: 'Extra Pale',
    value: 'malt=extra_pale',
  },
];

const beersPerPageOptions = [
  {
    label: '5',
    value: '5',
  },
  {
    label: '10',
    value: '10',
  },
  {
    label: '15',
    value: '15',
  },
];

function SearchBeersComponent() {
  const { register, handleSubmit, errors } = useForm();

  const [beersPerPage, setBeersPerPage] = useState(5);
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [paramsToPass, setParamsToPass] = useState('');
  const [beerName, setBeerName] = useState('');
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

  function getQueryParams() {
    return paramsToPass === 'beerName'
      ? [`beer_name=${beerName}`]
      : Object.values(params);
  }

  function scroolToTop() {
    window.scrollTo(0, 0);
  }

  function handleParamChange(event) {
    const { name, value } = event.target;
    setParams((prevParams) => ({ ...prevParams, [name]: value }));
  }

  function handleNameChange(event) {
    setBeerName(event.target.value);
  }

  function handleBeersPerPageChange(event) {
    const newPageNumber = Number(event.target.value);
    setBeersPerPage(newPageNumber);
  }

  async function getBeers(queryParams, page) {
    setLoading(true);
    const beers = await fetchBeers(queryParams, page, beersPerPage);
    setBeers(beers);
    setLoading(false);
  }

  function findBeers() {
    const queryParams = Object.values(params);
    getBeers(queryParams, 1);
    setPageNumber(1);
    setParamsToPass('params');
  }

  useEffect(() => {
    if (beers.length) {
      const queryParams = getQueryParams();
      getBeers(queryParams, 1, beersPerPage);
      scroolToTop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beersPerPage]);

  async function getBeersByName() {
    const queryParams = [`beer_name=${beerName}`];
    getBeers(queryParams, 1);
    setPageNumber(1);
    setParamsToPass('beerName');
  }

  function getNextPageBeers() {
    const nextPage = pageNumber + 1;
    const queryParams = getQueryParams();
    getBeers(queryParams, nextPage);
    setPageNumber(nextPage);
    scroolToTop();
  }

  function getPreviousPageBeers() {
    const previousPage = pageNumber - 1;
    const queryParams = getQueryParams();
    getBeers(queryParams, previousPage);
    setPageNumber(previousPage);
    scroolToTop();
  }

  function clearFilter() {
    setParams({
      alcoholVolume: '',
      ibuRange: '',
      colorOfBeer: '',
      brewedBefore: '',
      food: '',
      yeast: '',
      hops: '',
      malt: '',
    });
  }

  return (
    <div className="search-page">
      <Heading type="h1" className="title-search" text="Find Beers" />
      <div className="conteiner">
        <Heading text="Search beer" type="h2" />
        <InputComponent
          type="input"
          name="beerName"
          onChange={handleNameChange}
          placeholder="Write name of beer"
          className="input"
          register={register({ required: true, minLength: 2 })}
        />
        <div className="form">
          <Button
            className="search-beers-button"
            type="button"
            text="Search"
            onClick={handleSubmit(getBeersByName)}
          />
        </div>
        {errors.beerName && (
          <p className="errors">
            This is field required min length of 2 to 12{' '}
          </p>
        )}
        <Heading text="Filter" type="h2" className="filter" />
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
        type="button"
        onClick={clearFilter}
        className="button-clean-filter"
        text="clean the filter"
      />
      <Button
        type="button"
        className="button-find-beers"
        onClick={findBeers}
        text="Find beers"
      />
      {loading && <Spinner />}
      {beers.map(
        ({
          name,
          abv,
          description,
          id,
          brewed,
          tagline,
          ibu,
          food,
          img,
          ebc,
        }) => (
          <div key={id}>
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
              tagline={tagline}
            />
          </div>
        ),
      )}
      {beers.length > 0 && (
        <>
          <SelectComponent
            onChange={handleBeersPerPageChange}
            className="beers-per-page"
            name="beersPerPage"
            value={beersPerPage}
            options={beersPerPageOptions}
            placeholder="5"
          />
        </>
      )}
      <div className="navigation-page-buttons">
        {pageNumber !== 1 && (
          <Button
            className="previous-button"
            onClick={getPreviousPageBeers}
            text="Previous page"
            type="button"
          />
        )}
        {beers.length === beersPerPage && (
          <Button
            className="next-button"
            onClick={getNextPageBeers}
            text="Next page"
            type="button"
          />
        )}
      </div>
    </div>
  );
}

export default SearchBeersComponent;
