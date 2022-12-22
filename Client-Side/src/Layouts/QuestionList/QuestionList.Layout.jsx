import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navigationbar/Navbar'

//layout
function QuestionListLayout({ children }) {
    return (
        <div className='bg-light vh-100 p-3 bg-color-theme'>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default QuestionListLayout