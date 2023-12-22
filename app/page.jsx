'use client';
/* import useSWR from 'swr'; */
import useData from './fetchSWR';
import ListItem from './components/List/ListItem';
import styles from './page.module.css'


export default function Home() {

  const { data, isLoading, error } = useData()

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


  return (<>
      <ul className={styles.country_list_wrap}>
      <ListItem data={data}/>
      </ul>
  </>)
}
