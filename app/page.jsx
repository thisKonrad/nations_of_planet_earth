'use client';
/* import useSWR from 'swr'; */
import useData from './fetchSWR';
import { useState } from 'react';
import ListItem from './components/List/ListItem';
import Search from './components/Search/Search';
import styles from './page.module.css'


export default function Home() {

  const { data, isLoading, error } = useData();
  const[name,setName]= useState(data);

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

  function getSearchQuery(event){

    event.preventDefault()

    const searchQuery = event.target.search_nation.value;

    console.log("INPUT VALUE: ",searchQuery);

    setName(data.find((nation)=> nation.name.common === searchQuery));

    //if event value === null setName(data) : setName name

  }

  return (<>
  <header className={styles.search_wrap}>
    <Search
    handleSearch={getSearchQuery}/>
  </header>
      <ul className={styles.country_list_wrap}>
      <ListItem data={data}/>
      </ul>
  </>)
}
