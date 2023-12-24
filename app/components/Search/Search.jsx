/* :: Select Nation :: */
import './search.css';


export default function Search({data, onHandleChange}){

    return(<>
    <section className='select_wrap'>
        <label htmlFor='selectbar'>
            Select by Name:
            <select 
            name='nation_by_name' 
            id='selectbar'
            className='select'   
            value={''} 
            onChange={(event)=> onHandleChange(event)} 
            placeholder=' select by name ...'
            >
            <option>show all nations</option>
            {data.map((item)=><option key={item.name.common}>{item.name.common}</option>
            )}
            </select>
        </label>
    </section>
    </>)
}