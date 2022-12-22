import { combineReducers } from "redux";
import { categoryReducer } from "./Category/Reducers/Category.Reducers";
import { questionReducer,questionReducerList } from "./QuestionList/Reducers/Question.Reducer";

export const reducers = combineReducers({
    question: questionReducer,
    questions: questionReducerList,
    categories: categoryReducer
})