/* :: Select Nation :: */
import './search.css';


export default function SearchByName({onSearch, search}){

    return(<>
    <section className='search_bar_wrap'>
        <label htmlFor='searchbar'>
        Search by Name:
        <input type='text'
        name='nation_by_name' 
        id='searchbar'
        className='search_nation' 
        onChange={(event)=> onSearch(event.target.value)} 
        value={search}
        placeholder=' search by name ...'
        >
        </input>
        </label>
    </section>
    </>)
}

