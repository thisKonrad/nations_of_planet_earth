'use client';
/* import useSWR from 'swr'; */
import useData from './fetchSWR';
import { useState } from 'react';
import ListItem from './components/List/ListItem';
import Search from './components/Search/Search';
import styles from './page.module.css'


export default function Home() {

  const [userChange, setUserChange] = useState('');
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

    function handleChange(event){
      setUserChange(event.target.value)
      console.log("USER CHANGE:",userChange);
    }

    
  return (<>
  <header className={styles.search_wrap}>
    <Search
      data={sortedData}
      onHandleChange={handleChange}
   />
  </header>
      <ul className={styles.country_list_wrap}>
      <ListItem 
      userInput={userChange}
      data={sortedData}
      />
      </ul>
  </>)
}
