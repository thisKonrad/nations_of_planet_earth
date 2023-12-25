import Link from 'next/link';
import Image from "next/image";
import './list_item.css';


export default function ListItem({data}){

    return (<> 
    {data && data.map((country)=> 
        <li key={country.name.common}> 
        <div className='list_item_wrap'>
        <h2>{country.name.common}</h2>
        <Link href={{
            pathname:'/slug',
            query: {id: country.name.official}}}>
        <Image 
            className='image'
            width={360}
            height={280}
            src={country.flags.svg}
            alt={country.name.common}
            priority={false}>
        </Image>
        </Link>
        </div>
        </li>)}
    </>)
}