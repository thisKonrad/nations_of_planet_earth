import uuid from 'react-uuid';

import Link from 'next/link';
import Image from "next/image";
import './list_item.css';

export default function ListItem({data}){


return(<>
    {data &&
    data.map((country)=> 
    <li key={uuid()} >
        <div className='list_item_wrap'>
        <h2>{country.name.common}</h2>
            <Link href='../[Details]'></Link>
        <Image 
            className='image'
            width={0}
            height={0}
            src={country.flags.svg}
            alt={country.name.common}  
            priority={false}>
        </Image>
        </div>
    </li>)}
   </>)
}