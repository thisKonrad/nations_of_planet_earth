'use client';
import useSWR from 'swr';
import ListItem from './components/List/ListItem';
import styles from './page.module.css'

/* Rest Countires Api */
const fetcher = (...args) => fetch(...args).then(res => res.json());
const URL = 'https://restcountries.com/v3.1/all';


/** Reusable Data Hook for SWR fecth: */
/* function useCountry() {
  const { data, error, isLoading } = useSWR(URL, fetcher)
  console.log("DATA: ",data)
  return {
    user: data,
    isLoading,
    isError: error
  }
} */

export default function Home() {

  const { data, isLoading, isError } = useSWR(URL,fetcher)

  console.log("DATA: ", data)
 
  if (isLoading) return <div className='api_status'><h2>... nations are loading</h2></div>
  if (isError) return <div className='api_status'><h2>ERROR</h2></div>

  return (<>
      <ul className={styles.country_list_wrap}>
      <ListItem data={data}/>
      </ul>
  </>)
}
