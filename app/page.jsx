'use client';
import useData from './fetchSWR';
import { useState } from 'react';
import ListItem from './components/List/ListItem';
import Link from 'next/link';
import Heading from './components/Heading/Heading';
import SearchByName from './components/Search/SearchByName';
import SelectByRegion from './components/SelectByRegion/SelectByRegion';
import styles from './page.module.css'


export default function Home() {

  const [regionQuery, setRegionQuery]= useState(''); 
  const [nameQuery, setNameQuery] = useState('');

  
  const { data, isLoading, error } = useData();

  /* API status handling: */
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


  /* order the data alphabetically: */
  const sortedData = data.slice().sort(
  (a,b)=> a.name.common.localeCompare(b.name.common));


  function handleSelect(){

    if(nameQuery ==='' && regionQuery ==='') {
      return sortedData;
    }
    else if(nameQuery){
      return sortedData.filter((nation)=> 
        nation.name.common.includes(nameQuery));
    }
    else if(regionQuery){
      return sortedData.filter((nation)=> 
        nation.region === regionQuery);
    } 
  }

  function clearAll(){
    setRegionQuery('')
    return setNameQuery('');
  }
   
  console.log("NAME QUERY: ", nameQuery)
  console.log("Region Query: ", regionQuery); 


  return (<>
     {/*  <header className='header_default'> */}
     <header className='header_default'>
     <Heading>Nations Of Planet Earth</Heading>
        <ul>
           <li >
            <Link 
            href="/" 
            className='link'
            onClick={()=> clearAll()}
            >
            Home
            </Link>
          </li>
        </ul>
        <SearchByName
          onSearch={setNameQuery} 
          search={nameQuery}
        />
        <SelectByRegion
          onSelect={setRegionQuery} 
        />
      </header>
{/*   <header className={styles.search_wrap}>
    <SearchByName
    onSearch={setNameQuery} 
    search={nameQuery}
   />
   <SelectByRegion
    onSelect={setRegionQuery} 
    select={regionQuery}
   />
  </header> */}
  <section>
  <ul className={styles.country_list_wrap}>
    <ListItem 
    data={handleSelect()}
    />
    </ul>
  </section>
  </>)
}
