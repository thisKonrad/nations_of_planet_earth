/* :: Select Nation :: */
import './search.css';


export default function Search({data, onHandleChange, userInput}){

    let optionName = data.filter((item)=>item.name.common)


    return(<>
    <section className='select_wrap'>
        <label htmlFor='selectbar'>
            Select by Name:
            <select 
            name='nation_by_name' 
            id='selectbar'
            className='select'   
            value={userInput} 
            onChange={(event)=> onHandleChange(event)} 
            placeholder=' select by name ...'
            >
            {data.map((item)=> <option key={item.name.common}>{item.name.common}</option>)}
            </select>
        </label>
    </section>
    </>)
}