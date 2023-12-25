'use client';
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


  function handleSelect(){
    
    if(!nameQuery && !regionQuery) {
        return sortedData;
    }
      else if(nameQuery){
 
        return sortedData.filter((nation)=> 
        nation.name.common === nameQuery)

    }
      else if(regionQuery){
     
        return sortedData.filter((nation)=> 
        nation.region === regionQuery)
    }
  /*   else if(nameQuery && regionQuery){
      return sortedData.filter((nation)=> 
      nation.region === regionQuery)
    } */
  }

/*     function handleRegionSelect(){
      console.log("REGIONQUERY: ", regionQuery)
      if(!regionQuery) {
        return sortedData;
      }
      else{
        setNameQuery('')
        return sortedData.filter((nation)=> 
        nation.region === regionQuery);
      }
    }handleRegionSelect() */

  
  return (<>
  <header className={styles.search_wrap}>
    <Search
    onSearch={setNameQuery}
   />
   <SelectByRegion
   onSelect={setRegionQuery}
   />
  </header>
      <ul className={styles.country_list_wrap}>
      <ListItem 
      data={handleSelect()}
      />
      </ul>
  </>)
}
