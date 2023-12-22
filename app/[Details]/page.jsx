/* :::: Country Dteails Slug :::: */
import Image from "next/image";
import Heading from "../components/Heading/Heading";

export default function NationDetails({params:{Details}}) {
   
  return (<div>
        <Heading>{Details.name} - details: </Heading>
        <Image 
            className='image'
            width={0}
            height={0}
            src={Details.flags.svg}
            alt={Details.name.common}  
            priority={false}>
        </Image>
        <article>
          <p>Nation: {Details.name.official}</p>
          <p>Region: {Details.region}</p>
          <p>Capital: {Details.capital}</p>
          <p>Languages: {Details.languages}</p>
          <p>Population: {Details.population}</p>
        </article>
  </div>)
}