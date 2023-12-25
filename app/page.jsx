'use client';
/* import useSWR from 'swr'; */
import useData from './fetchSWR';
import { useState } from 'react';
import ListItem from './components/List/ListItem';
import Search from './components/Search/Search';
import styles from './page.module.css'


export default function Home() {

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
    (a,b)=> a.name.common.localeCompare(b.name.common))



    function handleNationByName(event){

      setNameQuery(event.target.value);
        console.log("USER CHANGE: ", nameQuery);

      if(!nameQuery){
        //console.log("QUERY DATA: ",data)
        setNameQuery([...sortedData]);
      }
      else if(nameQuery){
        //console.log("QUERY DATA: ", data.filter((nation)=> nation.name.common.includes(nameQuery)));
        setNameQuery(sortedData.slice().filter((nation)=> nation.name.includes(nameQuery)))

        //data.filter((nation)=> nation.name.common.includes(nameQuery));
      }
    }
 

    
  return (<>
  <header className={styles.search_wrap}>
    <Search
      onHandleChange={handleNationByName}
   />
  </header>
      <ul className={styles.country_list_wrap}>
      <ListItem 
      filterByName={nameQuery}
      />
      </ul>
  </>)
}
