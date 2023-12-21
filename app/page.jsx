'use client'
import Heading from "./components/Heading/Heading";
import useSWR from 'swr';
import ListItem from './components/List/ListItem';

/* Rest Countires Api */
const fetcher = (...args) => fetch(...args).then(res => res.json());
const URL = 'https://restcountries.com/v3.1/all';


/** Reusable Data Hook for SWR fecth: */
/* function useRover () {
  const { data, error, isLoading } = useSWR(URL, fetcher)
  console.log("DATA: ",data)
  return {
    user: data,
    isLoading,
    isError: error
  }
}
 */
export default function Home() {

  const { data, isLoading, isError } = useSWR(URL,fetcher)

  console.log("DATA: ", data)
 
  if (isLoading) return <div><h2>.. rover is loading</h2></div>
  if (isError) return <div><h2>ERROR</h2></div>

  //return <img src={user.avatar} />

  return (<>
   <Heading>Countrys Of Planet Earth:</Heading>
   <div>
      <ul className='country_list_wrap'>
      <ListItem data={data}/>
      </ul>
   </div>
  </>)
}
