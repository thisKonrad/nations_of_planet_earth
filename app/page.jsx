'use client';
/* import useSWR from 'swr'; */
import useData from './fetchSWR';
import { useState } from 'react';
import ListItem from './components/List/ListItem';
import Search from './components/Search/Search';
import SelectByRegion from './components/SelectByRegion/SelectByRegion';
import styles from './page.module.css'


export default function Home() {

  const [nameQuery, setNameQuery] = useState('');
  const [regionQuery, setRegionQuery]= useState('');

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
    (a,b)=> a.name.common.localeCompare(b.name.common))

    console.log("State of name Query: ",nameQuery)

    function getNationByName(){
      if(!nameQuery){
        return sortedData;
      }
      else{
        return data.filter((nation)=> 
        nation.name.common === nameQuery);
      }
    }

    console.log("function get nn: ",getNationByName())

    function handleSelect(){
      
    }
 

  return (<>
  <header className={styles.search_wrap}>
    <Search
    onHandleChange={setNameQuery}
   />
   <SelectByRegion
   onSelect={handleSelect}
   />
  </header>
      <ul className={styles.country_list_wrap}>
      <ListItem 
      onNameSearch={getNationByName()}
      />
      </ul>
  </>)
}
