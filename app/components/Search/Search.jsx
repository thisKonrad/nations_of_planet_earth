/* :: Select Nation :: */
import './search.css';


export default function Search({onHandleChange}){

    return(<>
    <section className='search_bar_wrap'>
        <label htmlFor='searchbar'>
            Select by Name:
            <input type='text'
            name='nation_by_name' 
            id='searchbar'
            className='search_nation'   
            onChange={(event)=> onHandleChange(event)} 
            placeholder=' search by name ...'
            >
            </input>
        </label>
    </section>
    </>)
}