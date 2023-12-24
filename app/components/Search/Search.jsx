
import './search.css';


export default function Search({ handleSearch}){


    return(<>
    <form className='search_form' onSubmit={(event)=> handleSearch(event)}>
        <label htmlFor='searchbar'>
            Search by Name:
            <input 
            type='text' 
            name='search_nation'
            id='searchbar'
            className='search_text'
            placeholder=' search nation by name'
            ></input>
        </label>
    </form>
    </>)
}