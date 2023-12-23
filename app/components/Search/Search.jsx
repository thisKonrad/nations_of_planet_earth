import './search.css';

export default function Search(){

    function getSearchQuery(event){

        event.preventDefault()

        const searchQuery = event.target.value();

        console.log(searchQuery);
    }


    return(<>
    <form className='search_form' onSubmit={(event)=>getSearchQuery(event)}>
        <input 
        name='search_nation'
        type='text' 
        className='search_text'
        value=''
        placeholder=' search by name'
        ></input>
    </form>
    </>)
}