import Select from 'react-select'
import './search.css';


export default function Search({data, onHandleChange}){

    let option = data.map(function(item) {
        return { value: item.name.common, label: item.name.common };
    });

    /* create new theme for Select package: */
    function nationTheme(theme){
        return {
            ...theme,
            colors:{
                ...theme.colors,
                primary25:'lightblue',
                primary: 'orange'
            }

        };

    }


    return(<>
    <section className='select_wrap'>
        <label htmlFor='selectbar'>
            Select by Name:
            <Select 
            name='nation_by_name' 
            id='selectbar'
            className='select'   
            options={option} 
            onChange={(choice) => onHandleChange(choice)}
            theme={nationTheme}
            placeholder=' select by name ...'
            isSearchable
            >
            </Select>
        </label>
    </section>
    </>)
}