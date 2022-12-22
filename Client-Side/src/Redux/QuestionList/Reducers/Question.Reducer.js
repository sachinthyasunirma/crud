import { QuestionActionTypes } from "../ActionTypes/Question.ActionType"

export const questionReducerList = (state = [], { type, payload }) => {
    switch (type) {
        case QuestionActionTypes.FETCH_QUESTIONS:
            return ({ ...state, questions: payload })
        case QuestionActionTypes.CREATE_QUESTION:
            return ({ ...state, questionCreate: payload })
        case QuestionActionTypes.DELETE_QUESTION:
            return ({ ...state, deleteQuestion: [] })
        case QuestionActionTypes.CHANGE_ACTIVE_STATE:
            return ({ ...state, changeActiveState: [] })
        default:
            return state
    }
}

export const questionReducer = (state = [], { type, payload }) =>{
    switch(type){
        case QuestionActionTypes.FETCH_QUESTION:
            return ({ ...state, question: payload })
        case QuestionActionTypes.EDIT_QUESTION:
            return ({ ...state, edit: payload})
        default:
            return state
    }
}
