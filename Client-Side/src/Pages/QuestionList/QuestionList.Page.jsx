import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search';
import Table from '../../Components/Table/Table';
import { fetchQuestions } from '../../Redux/QuestionList/Actions/Question.Action';
import { useDispatch, useSelector } from 'react-redux';
import { columns } from '../../Data/Question/Columns';
import { ToastContainer } from 'react-toastify';



function QuestionListPage() {

    const [filterVal, setFilterVal] = useState("");//set the filter text state

    const questions = useSelector(state => state.questions) //get the all questions 

    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [totalRows, setTotalRows] = useState(20);
    const [perPage, setPerpage] = useState(10);

    //fetch the all questions
    useEffect(() => {
        dispatch(fetchQuestions(filterVal,page,perPage))
    }, [perPage,page])

    return (
        <div>
            <Search
                filterVal={filterVal}
                page={page}
                perPage={perPage}
                setPage={setPage}
                setFilterVal={setFilterVal}
            />
            <Table
                totalRows={totalRows}
                setPerpage={setPerpage}
                setPage={setPage}
                columns={columns}
                data={questions != 0 ? questions.questions.data.data : []}
            />
            <ToastContainer />
        </div>
    )
}

export default QuestionListPage