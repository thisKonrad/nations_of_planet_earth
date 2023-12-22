import './list_item.css';
import Image from "next/image";


export default function ListItem({data}){


return(<>
    {data &&
    data.map((country)=> 
    <li key={country.area} >
        <div className='list_item_wrap'>
        <h2>{country.name.common}</h2>
        <Image 
            width={380}
            height={290}
            src={country.flags.svg}
            alt={country.name.common}>
        </Image>
        </div>
    </li>)}
   </>)
}