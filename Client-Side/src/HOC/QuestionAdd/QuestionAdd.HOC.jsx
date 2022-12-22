import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuestionAddLayout from '../../Layouts/QuestionAdd/QuestionAdd.Layout'


// higer order component 
function QuestionAddtHOC({ path, rest, component: Component }) {
    return (
        <Routes>
            <Route
                path={path}
                {...rest}
                element={
                    <QuestionAddLayout>
                        {Component}
                    </QuestionAddLayout>}
            />
        </Routes>
    )
}

export default QuestionAddtHOC