/* :: User Input Form :: */
import './form.css';

export default function Form({onHandleChange, input}){

    return(<>
    <section className='form_wrap'>
      {/*   <form type='submit' onSubmit={(e)=>onHandleSubmit(e)}> */}
      <form>
            <label htmlFor='searchbar'>
                Search by Name:
                <input type='text'
                    name='nameSearch' 
                    id='searchbar'
                    className='search_nation' 
                    onChange={(e)=>onHandleChange(e)} 
                    value={input.nameSearch}
                    placeholder=' search nation by name ...'
                    >
                </input>
            </label> 
            <label htmlFor='select_region'>
            Select a Region:
                <select
                    name='regionSelect' 
                    id='selectbar'
                    className='select_region'   
                    onChange={(e)=> onHandleChange(e)} 
                    value={input.regionSelect}
                    >
                    <option></option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                    <option>Antarctic</option>
                </select>
            </label>
        </form>
    </section>
    </>)
}



/**REGION
 * Asia, Americas, Oceania, Europe, Antarctic, Africa
 */

