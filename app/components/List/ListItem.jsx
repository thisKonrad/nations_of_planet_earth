import './list_item.css';
import Image from "next/image";


export default function ListItem({data}){


return(<>
    {data &&
    data.map((country)=> 
    <li key={country.area} >
        <div className='country_wrap'>
        <Image 
            width={380}
            height={290}
            src={country.flags.svg}
            alt={country.name.common}>
        </Image>
        <article>
            <h4>{country.name.common}</h4>
        </article>
        </div>
    </li>)}
   </>)
}