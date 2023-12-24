//import uuid from 'react-uuid';
import Link from 'next/link';
import Image from "next/image";
import './list_item.css';

export default function ListItem({data, userInput}){

    // if userInput === data.name.common
    /*    
    const dataNames = data.map((item)=>item.name.common);
    console.log("LIST USER INPUT: ", userInput)
    console.log("DATA NAME COMMON in LIST ", dataNames) */

    if(userInput !== '' || 'show all nations'){
        const compareName = data.find((item)=> item.name.common === userInput );

    console.log("CN: ",compareName)
    }
   


    return (<>
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