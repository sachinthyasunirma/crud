import React from 'react'
import { HiOutlineDotsHorizontal, HiEye } from 'react-icons/hi'
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteQuestion, updateActiveState } from '../../Redux/QuestionList/Actions/Question.Action';
import { toast } from 'react-toastify';


function Dropdown({ id, isActive }) {// get id and isActive state

    const dispatch = useDispatch()

    //delete question form the table
    const deleteQues = () => {
        if (window.confirm('delete')) {
            dispatch(deleteQuestion(id))
            toast.warn('Successfully Deleted Item')
        }
    }
    //changed the state of the question 
    const changeState = () => {
        dispatch(updateActiveState(id, { isActive: !isActive }))
        if(isActive){
            toast.error("Deactivated")
        }else{
            toast.success("Activated")
        }
    }
    
    return (
        <div className="btn-group">
            <button className="text-center btn btn-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <HiOutlineDotsHorizontal />
            </button>
            <ul className="dropdown-menu p-0">
                <li>
                    <a href={`/add/question/${id}`} className='btn btn-white w-100 small'>
                        <div className='d-flex justify-content-start align-items-center'>
                            <span className='px-3'><HiEye /></span>
                            View
                        </div>
                    </a>
                </li>
                <li>
                    <button onClick={changeState} type='button' className='btn btn-white w-100 small'>
                        <div className='d-flex justify-content-start align-items-center'>
                            {isActive ? (
                                <div className='text-danger'>
                                    <span className='px-3'><AiOutlineCheckCircle /></span>
                                    Deactive
                                </div>
                            ) : (
                                <div className='text-success'>
                                    <span className='px-3'><AiOutlineCheckCircle /></span>
                                    Active
                                </div>
                            )}
                        </div>
                    </button>
                </li>
                <li>
                    <button onClick={deleteQues} type='button' className='btn btn-white w-100 small'>
                        <div className='d-flex justify-content-start align-items-center text-danger'>
                            <span className='px-3'><AiFillDelete /></span>
                            Delete
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown