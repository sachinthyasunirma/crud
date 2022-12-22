import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createQuestion, editQuestion } from '../../Redux/QuestionList/Actions/Question.Action';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function QuestionForm({ categories, formDetails, setFormDetails }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const notify = () => toast("");

    //form error
    const [errorForm, setErrorForm] = useState({})
    const [isSubmitNewForm, setIsSubmitNewForm] = useState(false)

    //form validation
    const validate = (values) => {
        const errors = {}
        if (!values.question) {
            errors.question = "Please provide the valid question"
        }
        if (!values.category) {
            errors.category = "Please provide the valid category"
        }
        if (!values.status) {
            errors.status = "Please provide the valid status"
        }

        return errors
    }

    //get the url params -> get question Id 
    const params = useParams();
    const { id } = params

    // get the onchange output -> formDetail state
    const handleOnchange = (e) => {
        const {
            name, value
        } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    }

    // submit the form when new question creation 
    const submitForm = (e) => {
        e.preventDefault();
        setErrorForm(validate(formDetails))
        setIsSubmitNewForm(true);

    }

    useEffect(() => {
        if (Object.keys(errorForm).length === 0 && isSubmitNewForm) {
            dispatch(createQuestion(formDetails))
            toast.success('Successfully Create New Question!')
        }
    }, [errorForm])

    // submit new update existing question 
    const updateForm = (e) => {
        e.preventDefault();
        if (id != 'new' && id != null) {
            setErrorForm(validate(formDetails))
            setIsSubmitNewForm(true);
        }
    }

    useEffect(() => {
        if (Object.keys(errorForm).length === 0 && isSubmitNewForm) {
            dispatch(editQuestion(id, { formDetails }))
        }
    }, [errorForm])

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="question" className="form-label">Question</label>
                    <input name='question' value={formDetails.question || ""} onChange={handleOnchange} type="text" className="form-control" id="question" aria-describedby="question" />
                    <span className='text-danger small'>{errorForm.question}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select name='category' value={formDetails.category || ""} onChange={handleOnchange} id='category' className="form-select" aria-label="Default select example">
                        <option disabled={true} value="">Select Categor</option>
                        {categories.map((cat) => <option key={cat._id} value={cat._id}>{cat.categoryName}</option>)}
                    </select>
                    <span className='text-danger small'>{errorForm.category}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select name='status' onChange={handleOnchange} value={formDetails.status || ""} id='status' className="form-select" aria-label="Default select example">
                        <option disabled={true} value="">Select Status</option>
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                    <span className='text-danger small'>{errorForm.status}</span>
                </div>
                {(id != 'new' && id != null) ? (
                    <div className='mb-3 d-flex flex-row-reverse gap-2'>
                        <a onClick={updateForm} type="button" className="btn btn-primary">Update</a>
                    </div>
                ) : (
                    <div className='mb-3 d-flex flex-row-reverse gap-2'>
                        <button onClick={submitForm} type="button" className="btn btn-primary">Save</button>
                    </div>
                )
                }
            </form >
        </>
    )
}

export default QuestionForm