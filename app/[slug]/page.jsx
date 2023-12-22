/* :::: Country Details Slug :::: */
'use client'
/* import Image from "next/image";
import Heading from "../components/Heading/Heading"; */


export default function NationDetails({params}) {

  const {slug} = params;

  console.log("SLUG:", slug)

  return (<div>
    <h1>DETAILS,</h1>
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