import { CategoryActionTypes } from "../ActionTypes/Category.ActionTypes"


export const categoryReducer = (state=[],{type,payload}) =>{
    switch(type){
        case CategoryActionTypes.FETCH_CATEGORIES:
            return({...state, categories:payload})
        default:
            return state
    }
}