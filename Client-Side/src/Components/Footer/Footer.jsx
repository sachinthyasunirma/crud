import React from 'react'

function Footer() {
  return (
    <div className='container-fluid pt-2 pb-2'>
        <div className='d-flex md-flex-row flex-lg-row flex-column text-center justify-content-between'>
            <span className='small'>
                copyright @ iLabs. All Rights Reserved
            </span>
            <div>
                <ul className='d-flex flex-md-row flex-lg-row flex-column  gap-4 list-styles small'>
                    <li>@ Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Help Center</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer