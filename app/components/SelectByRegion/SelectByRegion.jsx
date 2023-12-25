/* :: Select By Region :: */
import './select_by_region.css';


export default function SelectByRegion({onSelect}){

    return(<>
    <section className='select_region_wrap'>
    <label htmlFor='select_region'>
    Select by Region:
    <select
        name='nation_by_name' 
        id='select_region'
        className='select_region_class'   
        onChange={(event)=> onSelect(event.target.value)} 
        placeholder=' Select by Region ...'
    >
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
        <option>Antarctic</option>
    </select>
    </label>
    </section>
    </>)
}



/**
 * Asia, Americas, Oceania, Europe, Antarctic, Africa
 */

