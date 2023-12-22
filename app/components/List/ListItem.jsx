import uuid from 'react-uuid';
import Image from "next/image";
import './list_item.css';

export default function ListItem({data}){


return(<>
    {data &&
    data.map((country)=> 
    <li key={uuid()} >
        <div className='list_item_wrap'>
        <h2>{country.name.common}</h2>
        <Image 
            width={320}
            height={240}
            src={country.flags.svg}
            alt={country.name.common}  
            placeholder={'nation banner image'}
            priority={false}>
        </Image>
        </div>
    </li>)}
   </>)
}