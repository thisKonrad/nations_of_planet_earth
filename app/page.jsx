'use client';
import useData from './fetchSWR';
import { useState } from 'react';
import ListItem from './components/List/ListItem';
import Link from 'next/link';
import Heading from './components/Heading/Heading';
import Form from './components/userInputForm/Form';
import styles from './page.module.css'


export default function Home() {

const[userInput, setUserInput]= useState({
    nameSearch:'',
    regionSelect:'',
}); 

function handleChange(event){
  const { name, value } = event.target;
  setUserInput({ ...userInput, [name]: value });
};

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


  function handleUserInput(userInput){
    if(userInput.nameSearch === '' &&
       userInput.regionSelect === '') {
      return sortedData;
    }
    else if(userInput.nameSearch){
      return sortedData.filter((nation)=> 
      nation.name.common.includes(userInput.nameSearch));
    }
    else if(userInput.regionSelect){
      return sortedData.filter((nation)=> 
      nation.region === userInput.regionSelect);
    } 
    console.log("USER_Name Search::", userInput.nameSearch)
    console.log("USER_Region Select::", userInput.regionSelect)

  }

  function clearNameSearch(){
    setUserInput({...userInput.nameSearch = ''})
  }

  function clearAll(){
    //setUserInput({...userInput.value=''})
  }

return (<>
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
        <Form
        input={userInput}
        onHandleChange={handleChange}
        onHandleInput={clearNameSearch}
        />
      </header>
  <section>
  <ul className={styles.country_list_wrap}>
    <ListItem
    data={handleUserInput(userInput)} 
    />
    </ul>  
  </section>
  </>)
}
