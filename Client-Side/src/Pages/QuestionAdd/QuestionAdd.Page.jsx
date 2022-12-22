import React, { useEffect, useState } from 'react'
import QuestionForm from '../../Components/Form/QuestionForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Redux/Category/Actions/Category.Action';
import { useParams } from 'react-router-dom';
import { fetchQuestion } from '../../Redux/QuestionList/Actions/Question.Action';
import { ToastContainer } from 'react-toastify';


function QuestionAddPage() {
    const dispatch = useDispatch();

    //to get qustion id
    const params = useParams();
    const {id} = params;

    //get question
    const question = useSelector(state => state.question);

    //set default question
    const [formDetails, setFormDetails] = useState({
        question: "",
        category: "",
        status: ""
    });

    //fetch question
    useEffect(() => {
        if (id != 'new' && id != null) {
            dispatch(fetchQuestion(id))
        }
    }, [])

    //set the state when question is avaibale 
    useEffect(() => {
        if (question.question) {
            setFormDetails({
                question: question.question.data.data[0].question,
                category: question.question.data.data[0].category,
                status: question.question.data.data[0].status
            })
        }
    }, [question])

    //fetch the categories
    useEffect(() => {
        dispatch(fetchCategories());
    }, [])

    //get the categories
    const categories = useSelector(state => state.categories)

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-lg-4 p-5 shadow-sm border rounded-5 border-primary bg-white">
                    <h4 className='pb-3'>{(id != 'new' && id != null) ? ('Question Edit'):('Question Create')}</h4>
                    <QuestionForm
                        formDetails={formDetails}
                        setFormDetails={setFormDetails}
                        categories={categories != 0 ? categories.categories.data.data : []}
                        // submitForm={submitForm}
                    />
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default QuestionAddPage