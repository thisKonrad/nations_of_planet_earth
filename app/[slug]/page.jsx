/* :::: Country Details Slug :::: */
'use client'
import { useSearchParams } from "next/navigation";
import useData from '../fetchSWR';
/* import Image from "next/image";
import Heading from "../components/Heading/Heading"; */


export default function NationDetails({}) {

  const { data, isLoading, error } = useData();
  const submittedNation = useSearchParams();

  if(submittedNation.get('id') === null){
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

  console.log('Details,-Data:', data)


  const nation = data.find((nation)=> data.name.common === nation.name.common);

  console.log("FIND: ",nation)



  return (<div>
    <h1>DETAILS, of: {nation.get('id')}</h1>
  </div>
   )
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