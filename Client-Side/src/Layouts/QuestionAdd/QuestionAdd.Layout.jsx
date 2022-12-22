import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navigationbar/Navbar'


//layout
function QuestionAddLayout({ children }) {
    return (
        <div className='bg-light vh-100 p-3'>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default QuestionAddLayout