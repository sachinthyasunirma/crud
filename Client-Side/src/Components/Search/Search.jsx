import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../../Redux/QuestionList/Actions/Question.Action';

function Search({filterVal,page,perPage,setFilterVal,setPage}) {
    const dispatch = useDispatch();

    //get the input search text 
    const getSearchText = (e) =>{
        setFilterVal(e.target.value)
    }

    //get the search data according to the search value
    const searchData = () =>{
        dispatch(fetchQuestions(filterVal,page,perPage))
        setPage(1);
    }
    return (
        <div className='container-fluid mb-4'>
            <div className='p-3 bg-white rounded '>
                <form className="d-flex" role="search">
                    <input name='search' onChange={getSearchText} className="form-control me-2 bg-light" type="search" placeholder="Search..." aria-label="Search" />
                    <button onClick={searchData} className="btn btn-outline-primary px-md-5" type='button'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search