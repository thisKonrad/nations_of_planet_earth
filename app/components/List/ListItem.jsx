//import uuid from 'react-uuid';
import Link from 'next/link';
import Image from "next/image";
import './list_item.css';

export default function ListItem({filterByName}){

    // if userInput === data.name.common
    /*    

     {data.map((item)=><option key={item.name.common}>{item.name.common}</option>
            )}

    const dataNames = data.map((item)=>item.name.common);
    console.log("LIST USER INPUT: ", userInput)
    console.log("DATA NAME COMMON in LIST ", dataNames) */

    console.log("LIST ITEM NATION FILTER:", filterByName)


    return (<>
    { filterByName && filterByName.map((country)=> 
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



/* return(<>
    { data && data.map((country)=> 
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
   </>) */