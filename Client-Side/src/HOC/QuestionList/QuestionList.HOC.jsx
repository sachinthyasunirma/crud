import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuestionListLayout from '../../Layouts/QuestionList/QuestionList.Layout'

//higher order components 
function QuestionListHOC({ path, rest, component: Component }) {
    return (
        <Routes>
            <Route
                path={path}
                {...rest}
                element={
                    <QuestionListLayout>
                        {Component}
                    </QuestionListLayout>}
            />
        </Routes>
    )
}

export default QuestionListHOC