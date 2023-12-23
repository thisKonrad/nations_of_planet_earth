/* :::: Country Details Slug :::: */
'use client'
import { useSearchParams } from "next/navigation";
import useData from '../fetchSWR';
import Image from "next/image";
import './details_style.css'

export default function NationDetails({}) {

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


  return (
    <section>
<div className='details_wrap'>
    <h1>{nation.name.common}</h1>
        <h2>Flag:</h2>
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
        <Image 
            className='coat_of_arms'
            width={120}
            height={120}
            src={nation.coatOfArms.svg}
            alt={nation.name}  
            priority={false}>
        </Image>
        <ul>
        {<li>
            <div className='info_article'>
              <p>Official name: {nation.name.official}</p>
              <p>Continent: {nation.continents}</p>
              <p>Region: {nation.region}</p>
              <p>Capital: {nation.capital}</p>
              <p>Languages: {Object.values(nation.languages)[0]}</p>
            {/*   <p>Currencies: {Object.values(JSON.parse(nation.currencies))}</p>   */}
              <p>Population: {nation.population}</p> 
              <p>Timezone: {nation.timezones}</p>
              <p>Sub Region: {nation.subregion}</p>
              <p>Car Signs: {Object.values(nation.car)[0]}</p>
              <p>UN Member: {nation.unMember === true ? <span>Yes</span> : <span>No</span>}</p>
              <p>Independent: {nation.independent === true ? <span>Yes</span> : <span>No</span>}</p>
            </div>
        </li>} 
        </ul>
      </div>
    </section>)
}

 /* <div>
        <Heading>{Details.name} - details: </Heading>
        <div className='details_wrap'>
        <Image 
            className='image'
            width={0}
            height={0}
            src={Details.flags}
            alt={Details.name}  
            priority={false}>
        </Image>
        <article>
          <p>Nation: {Details.name}</p>
          <p>Region: {Details.region}</p>
          <p>Capital: {Details.capital}</p>
          <p>Languages: {Details.languages}</p>
          <p>Population: {Details.population}</p>
        </article>
        </div> */