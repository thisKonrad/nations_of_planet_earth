/* :::: fetch SWR Component :::: */
'use client';
import useSWR from 'swr';

/* Rest Countries API: */
const fetcher = (...args) => fetch(...args).then(res => res.json());
const URL = 'https://restcountries.com/v3.1/all';


export default function useData(){

  const { data, isLoading, error } = useSWR(URL,fetcher)

  console.log("DATA: ", data);

    return {
        data: data,
        isLoading,
        error: error,
      }
}