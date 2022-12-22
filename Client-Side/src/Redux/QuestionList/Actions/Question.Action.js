import QuestionAPI from "../../../API/Question/QuestionAPI";
import { QuestionActionTypes } from "../ActionTypes/Question.ActionType";


export const fetchQuestions = (filterVal,page,perPage) => async (dispatch) => {
    const response = await QuestionAPI.get(`/s/get/?searchString=${filterVal}&page=${page}&perPageRows=${perPage}`)
    dispatch({
        type: QuestionActionTypes.FETCH_QUESTIONS,
        payload: response
    })
}

export const createQuestion = (data) => async (dispatch) => {
    const response = await QuestionAPI.post('/create',{...data})
    dispatch({
        type: QuestionActionTypes.CREATE_QUESTION,
        payload: response
    })
    dispatch(fetchQuestions(''))
}

export const deleteQuestion = (id) => async (dispatch) => {
    console.log(id);
    await QuestionAPI.put(`/delete/${id}`)
    dispatch({
        type: QuestionActionTypes.DELETE_QUESTION,
        payload: []
    })
    dispatch(fetchQuestions(''))
}

export const updateActiveState = (id,data) => async (dispatch) => {
    await QuestionAPI.put(`/update/${id}`,{...data})
    dispatch({
        type: QuestionActionTypes.CHANGE_ACTIVE_STATE,
        payload: []
    })
    dispatch(fetchQuestions(''))
}

export const fetchQuestion = (id) => async (dispatch) => {
    const response = await QuestionAPI.get(`/get/${id}`)
    dispatch({
        type: QuestionActionTypes.FETCH_QUESTION,
        payload: response
    })
}

export const editQuestion = (id,data) => async (dispatch) => {
    const response = await QuestionAPI.put(`/edit/${id}`,{...data.formDetails})
    dispatch({
        type: QuestionActionTypes.EDIT_QUESTION,
        payload: response
    })
    dispatch(fetchQuestion(id))
}