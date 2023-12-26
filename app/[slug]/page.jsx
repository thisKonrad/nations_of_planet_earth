/* :::: Country Details Slug :::: */
'use client'
import { useSearchParams } from "next/navigation";
import useData from '../fetchSWR';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './details_style.css'

export default function NationDetails({}) {


  const[state, setState] = useState(true);

  const { data, isLoading, error } = useData();
  const submittedNation = useSearchParams();
  const nationID = submittedNation.get('id');

  /* data error handling: */
  if(nationID === null){
    console.log("ERROR")
    return <div className='api_status'>ERROR</div>
  }
  if (isLoading) return <div className='api_status'>
  <h2>... nations are loading</h2></div>
  if (error) return <div className='api_status'>
  <article>
  <h2>ERROR</h2>
  <br></br>
  <p> ... No data available!</p>
  <p>Please, check your internet</p>
  <p>connection!</p>
  </article>
  </div>  

  console.log('Details Page Data:', data)
  console.log('Nation Id: ', nationID)

  const nation= data.find((item)=> item.name.official === nationID);

  console.log('NATION: ', nation)

  let currencieValues = [];

  function getCurrencieValues(){

    let currencie = nation.currencies;
 
    for (let key in currencie) {
      if (currencie.hasOwnProperty(key)) {
        currencieValues.push(currencie[key].name)
        currencieValues.push(currencie[key].symbol);
        }
    }
    return currencieValues;
  } 
  getCurrencieValues()


  return (<>
  <header className='header_default'>
        <ul>
           <li >
            <Link 
            href="/" 
            className='link'>
            Home
            </Link>
          </li>
        </ul>
  </header>
  <section>
    <div className='details_wrap'>
      <h1>{nation.name.common}</h1>
        <Image 
            className='image'
            width={0}
            height={0}
            src={nation.flags.svg}
            alt={nation.name}  
            priority={false}>
        </Image>
        <br></br>
        <h2>Coat Of Arms:</h2>
        {Object.keys(nation.coatOfArms).length === 0 ? <h2>no data</h2> :
          <Image 
            onClick={()=> setState(!state)}
            className='coat_of_arms'
            width={ state ? 140 : 320}
            height={ state ? 140 : 320}
            src={nation.coatOfArms.svg}
            alt={nation.name}  
            priority={false}>
          </Image>}
        <br></br>
        <Link 
        href={nation.maps.googleMaps} 
        target='_blank'
        className='map_link'
        >
        <button className='button_maps'>
          show on maps 
        </button>
        </Link>
        <ul>
        {<li>
            <div className='info_article'>
              <p>Official Name: {nation.name.official}</p>
              <p>Continent: {nation.continents}</p>
              <p>Region: {nation.region}</p>
              <p>Capital: {nation.capital}</p>
              <p>Languages: {Object.values(nation.languages)[0]}</p>
              <p>Currencies: {currencieValues[0]}</p>  
              <p>Currencie Symbol: {currencieValues[1]}</p>  
              <p>Population: {nation.population} people</p> 
              <p>Timezone: {nation.timezones[0]}</p>
              <p>Sub Region: {nation.subregion}</p>
              <p>Car Signs: {Object.values(nation.car)[0][0]}</p>
              <p>UN Member: {nation.unMember === true ? <span>Yes</span> : <span>No</span>}</p>
              <p>Independent: {nation.independent === true ? <span>Yes</span> : <span>No</span>}</p>
            </div>
        </li>} 
        </ul>
      </div>
    </section>
    </>)
}